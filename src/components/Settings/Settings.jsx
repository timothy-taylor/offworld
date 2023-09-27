import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { useKeyboard } from "../../hooks/useKeyboard";
import { userAtom } from "../../stores/user-store";

// components
import LogIn from "./components/LogIn";
import Presets from "./components/Presets";
import { CloseIcon } from "../Icons";
import { SettingsH1, SettingsH2 } from "./components/SettingsHeaders";
import LogOut from "./components/LogOut";
import ImageUpload from "./components/ImageUpload";
import AudioUpload from "./components/AudioUpload";
import { SettingsButton } from "./components/SettingsButton";
import SettingsListItem from "./components/SettingsListItem";
import { AuthRetryableFetchError } from "@supabase/supabase-js";

const Login = () => {
    const [user, checkForUser] = useAtom(userAtom),
        [attemptLogin, setAttemptLogin] = useState(false),
        [hasSupabaseConnection, setHasSupabaseConnection] = useState(true);

    if (!hasSupabaseConnection)
        return <SettingsListItem text="Error connecting to database..." />;
    if (attemptLogin || user)
        return user ? <LogOut email={user.email} /> : <LogIn />;
    return (
        <SettingsListItem text="User">
            <SettingsButton
                text="Sign-up / Log-in"
                handleClick={async () => {
                    const { error } = await checkForUser();

                    // since I'm a free plan of supabase,
                    // the database often gets paused
                    // this checks for that
                    if (error instanceof AuthRetryableFetchError)
                        setHasSupabaseConnection(false);

                    setAttemptLogin(true);
                }}
            />
        </SettingsListItem>
    );
};

export default function Settings({ id }) {
    const user = useAtomValue(userAtom);

    useKeyboard("Escape", hideSettings);

    function hideSettings() {
        document
            .getElementById(id)
            .classList.add("invisible", "-translate-x-full");
    }

    return (
        <div
            id={id}
            className="invisible fixed z-50 min-h-screen w-screen -translate-x-full font-armata text-white transition duration-500 ease-in-out"
        >
            <CloseIcon handleClick={hideSettings} />
            <main className="flex min-h-screen flex-col items-center justify-center bg-darkest">
                <SettingsH1 text="Offworld" />
                <SettingsH2 text="Config" />

                <ul className="flex flex-col gap-y-4">
                    <Login />
                    <ImageUpload />
                    <AudioUpload />
                    {user && <Presets />}
                </ul>
            </main>
        </div>
    );
}
