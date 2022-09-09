import { useAtom } from "jotai";
import { photoAtom } from "../../services/atom-store";
import { CheckIcon } from "../../components/Icons";

const ImageUpload = ({ defaultStrings, getDefaults }) => {
  const [setPhoto] = useAtom(photoAtom).reverse();

  return (
    <>
      <h2 className="pl-4 text-lg text-center underline">current image:</h2>
      {defaultStrings("uploaded-image")}
      <div className="py-4 pl-4 m-4 border-2 border-dotted">
        <input
          type="file"
          name="image-input"
          className=""
          onChange={(e) => {
            const reader = new FileReader();
            reader.onload = () => {
              sessionStorage.setItem("uploaded-image", reader.result);
              setPhoto(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <label htmlFor="image-input" className="block px-2 italic">
          upload a new image
        </label>
        <div className="flex pt-3 pl-1">{getDefaults("uploaded-image")}</div>
        <CheckIcon checkID="image-check" />
      </div>
    </>
  );
};

export default ImageUpload;
