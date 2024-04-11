import { useState } from "react";
import { supabase } from "../../../lib/supabase-client";
import { SettingsButtonSubmit } from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { data } = await supabase.auth.signInWithOtp({ email });
        setEmail("");
        setStatus(
            data.user ? "Please check your email" : "Something went wrong",
        );
    };

    if (status.length) return <SettingsListItem text={status} />;
    return (
        <SettingsListItem>
            <form onSubmit={handleSubmit}>
                <input
                    className="text-black"
                    type="email"
                    placeholder="email@example.com"
                    maxLength={64}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <SettingsButtonSubmit text="Sign up / Log in" />
            </form>
        </SettingsListItem>
    );
}
