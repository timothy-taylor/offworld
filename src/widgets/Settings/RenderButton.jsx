import { useAtom } from "jotai";
import { playerAtom } from "../../services/atom-store";

const buttonStyle =
  "p-4 border-2 rounded-sm border-slate-700 hover:bg-slate-700";

const RenderButton = () => {
  const [player] = useAtom(playerAtom);

  return (
    <div className="py-4 text-center">
      <button
        className={buttonStyle}
        onClick={() => {
          // updateBuffer will load the new audio file
          document.getElementById("audio-check").classList.add("hidden");
          player.updateBuffer().catch((err) => console.error(err));
          document.getElementById("image-check").classList.remove("hidden");
          document.getElementById("audio-load").classList.remove("hidden");
        }}
      >
        Render changes
      </button>
    </div>
  );
};

export default RenderButton;
