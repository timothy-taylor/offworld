import { useState } from "react";
import { useAtom } from "jotai";
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

export default function Settings({ id }) {
  const [user, checkForUser] = useAtom(userAtom);
  const [attemptLogin, setAttemptLogin] = useState(false);
  useKeyboard("Escape", hideSettings);

  function hideSettings() {
    document.getElementById(id).classList.add("invisible", "-translate-x-full")
  }

  //
  // to insure we are not fetching against supabase
  // unnecessarily, let's make sure users
  // actually want authenticated functionality first
  const RenderLogin = () => {
    if (attemptLogin || user)
      return user ? <LogOut email={user.email} /> : <LogIn />;

    return (
      <SettingsListItem text="User">
        <SettingsButton
          text="Sign-up / Log-in"
          handleClick={() => {
            setAttemptLogin(true);
            checkForUser().catch((err) => console.error(err));
          }}
        />
      </SettingsListItem>
    );
  };

  const containerStyle = "z-50 fixed min-h-screen w-screen -translate-x-full ease-in-out duration-500 transition"
                         + " text-white font-armata invisible"

  return (
    <div id={id} className={containerStyle}>
      <CloseIcon handleClick={hideSettings} />
      <main className="min-h-screen bg-darkest flex flex-col items-center justify-center">
        <SettingsH1 text="Offworld" />
        <SettingsH2 text="Settings" />

        <ul>
          {RenderLogin()}
          <ImageUpload />
          <AudioUpload />
          {user && <Presets />}
        </ul>
      </main>
    </div>
  );
};