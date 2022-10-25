import { useAtom } from "jotai";
import { supabase } from "../../../lib/supabase-client";
import { userAtom } from "../../../stores/user-store";
import { SettingsButton } from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

export default function LogOut({ email }) {
  const checkForUser = useAtom(userAtom)[1];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    await checkForUser();
  };

  return (
    <SettingsListItem text={email}>
      <SettingsButton text="Log out" handleClick={handleLogout} />
    </SettingsListItem>
  );
};