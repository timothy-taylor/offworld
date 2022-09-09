import { Link } from "react-router-dom";
import AudioUpload from "./AudioUpload";
import ImageUpload from "./ImageUpload";
import RenderButton from "./RenderButton";
import { CloseIcon, DeleteIcon } from "../../components/Icons";

const GetDefaults = (x) => {
  if (sessionStorage.getItem(x))
    return (
      <>
        <DeleteIcon str={x} />
        <span className="pl-4">Reset to default {x.split("-").pop()}</span>
      </>
    );

  return null;
};

const DefaultStrings = (x) => {
  const classes = "pt-1 text-center font-serif";
  if (sessionStorage.getItem(x))
    return (
      <p className={classes}>
        {x === "uploaded-image" ? "user uploaded image" : "user uploaded audio"}
      </p>
    );

  return (
    <p className={classes}>
      {x === "uploaded-image"
        ? "default image (by Alex Andrews)"
        : "default audio (disquiet0482 by TGT)"}
    </p>
  );
};

const containerStyle = "min-h-screen bg-slate-600 text-white";

const Settings = () => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US");

  return (
    <div id="settings-menu" className={containerStyle}>
      <Link to="/">
        <CloseIcon menuID="settings-menu" />
      </Link>
      <h1 className="py-4 pb-8 pl-4 text-2xl">Settings</h1>
      <p className="pb-8 mx-8 italic text-center">
        Using sessionStorage you have a maximum 5MB between the two files. The
        choice is yours.
      </p>
      <ImageUpload getDefaults={GetDefaults} defaultStrings={DefaultStrings} />
      <AudioUpload getDefaults={GetDefaults} defaultStrings={DefaultStrings} />
      <RenderButton />
      <h5 className="text-center md:absolute md:right-4 md:bottom-4">{time}</h5>
    </div>
  );
};

export default Settings;
