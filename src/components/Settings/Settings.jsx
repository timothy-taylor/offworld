import { useAtom } from "jotai";
import { useKey } from "../../hooks/useKey";
import { userAtom } from "../../stores/user-store";

// components
import LogIn from "./components/LogIn";
import Presets from "./components/Presets";
import { CloseIcon } from "../Icons";
import {
  SettingsH1,
  SettingsH2,
} from "./components/SettingsHeaders";
import LogOut from "./components/LogOut";
import ImageUpload from "./components/ImageUpload";
import AudioUpload from "./components/AudioUpload";
import { useState } from "react";
import SettingsButton from "./components/SettingsButton";
import SettingsListItem from "./components/SettingsListItem";

const Settings = ({ id }) => {
  const [user, checkForUser] = useAtom(userAtom);
  const [attemptLogin, setAttemptLogin] = useState(false);

  const hideSettings = () => {
    document.getElementById(id).classList.add("invisible", "-translate-x-full")
  }

  useKey("Escape", hideSettings);

  //
  // to insure we are not fetching against supabase
  // unnecessarily, let's make sure users
  // actually want authenticated functionality first
  const LoginConditions = () => {
    if (attemptLogin || user)
      return user ? <LogOut email={user.email} /> : <LogIn />;

    return (
      <SettingsListItem text="User">
        <SettingsButton
          text="Log in or Signup"
          handleClick={() => {
            setAttemptLogin(true);
            checkForUser().catch((err) => console.error(err));
          }}
        />
      </SettingsListItem>
    );
  };

  return (
    <div
      id={id}
      className="z-50 fixed min-h-screen w-screen md:w-3/4 lg:w-2/3 -translate-x-full ease-in-out duration-500 transition text-white font-armata invisible"
    >
      <CloseIcon handleClick={hideSettings} />
      <main className="min-h-screen bg-darkest flex flex-col items-center justify-center">
        <SettingsH1 text="Offworld" />
        <SettingsH2 text="Settings" />

        <ul>
          {LoginConditions()}
          <ImageUpload />
          <AudioUpload />
          {user && <Presets />}
        </ul>
      </main>
    </div>
  );
};

export default Settings;
