import { useAtom, useAtomValue } from "jotai";
import { useGetSupabase } from "../../../hooks/useGetSupabase";
import { supabase } from "../../../lib/supabase-client";
import { audioAtom } from "../../../stores/audio-engine-store";
import { imageAtom } from "../../../stores/canvas-store";
import { userAtom } from "../../../stores/user-store";
import { SettingsButton } from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

const createPresetData = (id: string | undefined) =>
    id
        ? [
              {
                  ix: 0,
                  label: "first",
                  text: "Preset 1",
                  audioPath: `${id}/one/audio`,
                  imagePath: `${id}/one/image`,
              },
              {
                  ix: 1,
                  label: "second",
                  text: "Preset 2",
                  audioPath: `${id}/two/audio`,
                  imagePath: `${id}/two/image`,
              },
              {
                  ix: 2,
                  label: "third",
                  text: "Preset 3",
                  audioPath: `${id}/two/audio`,
                  imagePath: `${id}/two/image`,
              },
          ]
        : [];

const uploadFile = async (path: string, filename: string) => {
    const { data, error } = await supabase.storage
        .from("presets")
        .upload(path, filename, { upsert: true });

    if (error) console.error(error);
    if (data) return data;
};

const downloadFile = async (filename: string) => {
    const { data: file } = await supabase.storage
        .from("presets")
        .download(filename);

    return await file?.text();
};

export default function Presets() {
    const user = useAtomValue(userAtom);
    const [currentAudio, setCurrentAudio] = useAtom(audioAtom);
    const [currentImage, setCurrentImage] = useAtom(imageAtom);
    const presetData = createPresetData(user?.id);

    const { data: files } = useGetSupabase(() =>
        supabase.storage.from("presets").list(user?.id, {
            limit: 3,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
        }),
    );

    return (
        <>
            {presetData.map((e, i) => (
                <SettingsListItem key={i} text={e.text}>
                    {files.length > e.ix && (
                        <SettingsButton
                            text="load"
                            handleClick={async () => {
                                const audioDownload = await downloadFile(
                                    e.audioPath,
                                );
                                const imageDownload = await downloadFile(
                                    e.imagePath,
                                );
                                await setCurrentAudio(audioDownload!);
                                setCurrentImage(imageDownload!);
                            }}
                        />
                    )}
                    <SettingsButton
                        text="save"
                        handleClick={async () => {
                            const result = await Promise.all([
                                uploadFile(
                                    e.audioPath,
                                    currentAudio.toString(),
                                ),
                                uploadFile(e.imagePath, currentImage),
                            ]);

                            if (result)
                                alert(
                                    `SUCCESS: Your media files have been saved to the ${e.label} preset.`,
                                );
                        }}
                    />
                </SettingsListItem>
            ))}
        </>
    );
}
