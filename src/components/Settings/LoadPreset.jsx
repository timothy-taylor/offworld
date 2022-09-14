import SettingsListItem from "./SettingsListItem";
import SettingsButton from "./SettingsButton";
import { supabase } from "../../helpers/supabase-client";
import { useAtom } from "jotai";
import { audioAtom } from "../../stores/audio-engine-store";
import { useState } from "react";
import { useGetSupabase } from "../../hooks/useGetSupabase";

const LoadPreset = ({ user }) => {
  const setAudioAtom = useAtom(audioAtom)[1];
  const [selectIndex, setSelectIndex] = useState("");
  const { data: files } = useGetSupabase(() =>
    user && supabase.storage.from("audio").list(user.id, {
      limit: 5,
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
          value={selectIndex}
          onChange={(e) => setSelectIndex(e.target.value)}
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
            .download(selectIndex);
          const asText = await audioFile.text();
          await setAudioAtom(asText);
        }}
      />
    </SettingsListItem>
  )
}

export default LoadPreset;