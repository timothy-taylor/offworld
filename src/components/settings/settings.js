import React from "react";
import AudioUpload from "./audioupload";
import ImageUpload from "./imageupload";
import RenderButton from "./renderbutton";
import { CloseIcon, DeleteIcon } from "../icons";

const Settings = (props) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US");
  const getDefaults = (x) => {
    if (sessionStorage.getItem(x)) {
      return (
        <>
          <DeleteIcon str={x} />
          <span className="pl-4">Reset to default {x.split("-").pop()}</span>
        </>
      );
    } else {
      return null;
    }
  };

  const defaultStrings = (x) => {
    const classes = "pt-1 text-center font-serif";
    if (sessionStorage.getItem(x)) {
      return (
        <p className={classes}>
          {x === "uploaded-image"
            ? "user uploaded image"
            : "user uploaded audio"}
        </p>
      );
    } else {
      return (
        <p className={classes}>
          {x === "uploaded-image"
            ? "default image (by Alex Andrews)"
            : "default audio (disquiet0482 by TGT)"}
        </p>
      );
    }
  };

  return (
    <div
      id="settings-menu"
      className="fixed md:min-w-[400] text-slate-900 hidden font-mono rounded-md select-none inset-4 md:left-1/2 lg:left-2/3 md:inset-y-8 md:right-6 bg-slate-500 opacity-90 z-[90] hover:opacity-100"
    >
      <CloseIcon menuID="settings-menu" />
      <h1 className="py-4 pb-8 pl-4 text-2xl">Settings</h1>
      <p className="pb-8 mx-2 italic text-center text-slate-900">
        Using sessionStorage you have a maximum 5MB between the two files. The
        choice is yours.
      </p>
      <ImageUpload getDefaults={getDefaults} defaultStrings={defaultStrings} />
      <AudioUpload getDefaults={getDefaults} defaultStrings={defaultStrings} />
      <RenderButton player={props.player} draw={props.draw} canvas={props.canvas} />
      <h5 className="absolute text-right right-4 bottom-4">{time}</h5>
    </div>
  );
};

export default Settings;
