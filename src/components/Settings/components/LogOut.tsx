import { useSetAtom } from "jotai";
import { supabase } from "../../../lib/supabase-client";
import { userAtom } from "../../../stores/user-store";
import { SettingsButton } from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

type Props = { email: string };

export default function LogOut({ email }: Props) {
    const checkForUser = useSetAtom(userAtom);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        await checkForUser();
    };

    return (
        <SettingsListItem text={email}>
            <SettingsButton text="Log out" handleClick={handleLogout} />
        </SettingsListItem>
    );
}
