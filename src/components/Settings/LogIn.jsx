import { useState } from "react";
import { supabase } from "../../helpers/supabase-client";
import SettingsButton from "./SettingsButton";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  if (status.length > 0) return <div>{status}</div>
  return (
    <>
    <input
      className="text-black"
      type="email"
      value={email}
      placeholder="email@example.com"
      onChange={(e) => setEmail(e.target.value)}
    />
    <SettingsButton
      text="Sign up / Log in"
      handleClick={async () => {
        try {
          await supabase.auth.signInWithOtp({ email });
          setEmail("");
          setStatus("Please check your email");
        } catch (e) {
          console.error("Supabase magic link login: ", e);
        }
      }}
    />
  </>
  )
}

export default LogIn;