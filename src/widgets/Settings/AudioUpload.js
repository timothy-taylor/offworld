import { CheckIcon, LoadIcon } from "../../components/Icons";

const AudioUpload = ({ defaultStrings, getDefaults }) => {
  return (
    <>
      <h2 className="pt-8 text-lg text-center underline">current audio:</h2>
      {defaultStrings("uploaded-audio")}
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
        <div className="flex pt-3 pl-1">{getDefaults("uploaded-audio")}</div>
        <CheckIcon checkID="audio-check" />
        <LoadIcon loadID="audio-load" />
      </div>
    </>
  );
};

export default AudioUpload;
