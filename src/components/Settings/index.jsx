import { useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parameters from "./Parameters";
import { useKey } from "../../hooks/useKey";
import { CloseIcon } from "../Icons";
import { useAtom } from "jotai";
import { userAtom } from "../../stores/user-store";
import { supabase } from "../../helpers/supabase-client";
import { SettingsH2 } from "./SettingsHeaders";
import SettingsButton from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";
import LogIn from "./LogIn";
import LoadPreset from "./LoadPreset";

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
          <LoadPreset user={user} />
          <Parameters />
        </ul>
      </div>
    </div>
  );
};

export default Settings;
