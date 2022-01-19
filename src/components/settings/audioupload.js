import { CheckIcon } from "../icons";

const AudioUpload = (props) => {
  return (
    <>
      <h2 className="pt-8 text-lg text-center underline">current audio:</h2>
      {props.defaultStrings("uploaded-audio")}
      <div className="py-4 pl-4 m-4 border-2 border-dotted">
        <input
          type="file"
          name="audio-input"
          className=""
          onChange={(e) => {
            const reader = new FileReader();
            reader.onload = () => {
              sessionStorage.setItem("uploaded-audio", reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <label htmlFor="audio-input" className="block px-2 italic">
          upload a new audio file
        </label>
        <div className="flex pt-3 pl-1">
          {props.getDefaults("uploaded-audio")}
        </div>
        <CheckIcon checkID="audio" />
      </div>
    </>
  );
};

export default AudioUpload;
