import { useState } from "react";
import { supabase } from "../../../lib/supabase-client";
import { SettingsButtonSubmit } from "./SettingsButton";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await supabase.auth.signInWithOtp({ email });
      setEmail("");
      setStatus("Please check your email");
    } catch (e) {
      console.error("Supabase magic link login: ", e);
    }
  };

  if (status.length > 0) return <div>{status}</div>;
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black"
        type="email"
        placeholder="email@example.com"
        maxLength="64"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SettingsButtonSubmit text="Sign up / Log in" />
    </form>
  );
};

export default LogIn;
