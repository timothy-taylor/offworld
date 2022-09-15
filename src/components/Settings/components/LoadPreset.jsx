import { useState } from "react";
import { useAtom } from "jotai";
import { supabase } from "../../../helpers/supabase-client";
import { audioAtom } from "../../../stores/audio-engine-store";
import { useGetSupabase } from "../../../hooks/useGetSupabase";
import { userAtom } from "../../../stores/user-store";
import SettingsListItem from "./SettingsListItem";
import SettingsButton from "./SettingsButton";

const LoadPreset = () => {
  const [filename, setFilename] = useState("");
  const [user] = useAtom(userAtom);
  const setAudioAtom = useAtom(audioAtom)[1];
  const { data: files } = useGetSupabase(() =>
    user && supabase.storage.from("audio").list(user.id, {
      limit: 6,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    })
  );

  if (!user) return null;
  return (
    <SettingsListItem
      text={
        <select
          className="h-9 max-w-0"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        >
          <option value="">--select a preset--</option>
          {files.map((e, i) => (
            <option key={i} value={`${user.id}/${e.name}`}>
              {e.name}
            </option>
          ))}
        </select>
      }
    >
      <SettingsButton
        text="Load preset"
        handleClick={async () => {
          const { data: audioFile } = await supabase.storage
            .from("audio")
            .download(filename);

          const asText = await audioFile.text();
          await setAudioAtom(asText);
        }}
      />
    </SettingsListItem>
  )
}

export default LoadPreset;