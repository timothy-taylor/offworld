import { useId } from "react";
import { useAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";
import { useKey } from "../../hooks/useKey";
import { userAtom } from "../../stores/user-store";
import { supabase } from "../../helpers/supabase-client";

// components
import SettingsButton from "./components/SettingsButton";
import SettingsListItem from "./components/SettingsListItem";
import LogIn from "./components/LogIn";
import Presets from "./components/Presets";
import Parameters from "./components/Parameters";
import { CloseIcon } from "../Icons";
import { SettingsH2 } from "./components/SettingsHeaders";

const Settings = () => {
  const [user, checkForUser] = useAtom(userAtom);
  const id = useId();
  const navigate = useNavigate();
  useKey("Escape", () => navigate("/"));

  return (
    <div id={id} className="min-h-screen text-white font-armata">
      <Link to="/" className="z-30">
        <CloseIcon menuID={id} />
      </Link>
      <div className="min-h-screen bg-darkest flex flex-col items-center justify-center">
        <h1 className="z-10 fixed top-0 lg:inset-x-auto font-notable text-neutral text-5xl md:text-6xl lg:text-8xl">
          Offworld
        </h1>
        <SettingsH2 text="Settings" />
        <ul>
          {user ? (
            <SettingsListItem text={user.email}>
              <SettingsButton
                text="Log out"
                handleClick={async () => {
                  await supabase.auth.signOut();
                  checkForUser();
                }}
              />
            </SettingsListItem>
          ) : (
            <LogIn />
          )}
          <Parameters />
          {user && <Presets />}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
