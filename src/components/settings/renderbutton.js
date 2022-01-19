const RenderButton = (props) => (
  <div className="py-4 text-center">
    <button
      className="p-4 border-2 rounded-sm text-slate-900 border-slate-200 hover:bg-slate-900 hover:text-slate-200"
      onClick={() => {
        // draw will redraw the screen with the newimage
        // updateBuffer will load the new audio file
        document.getElementById("audio-check").classList.add("hidden");
        props.draw(props.canvas);
        props.player.updateBuffer();
        document.getElementById("image-check").classList.remove("hidden");
        document.getElementById("audio-load").classList.remove("hidden");
      }}
    >
      Render changes
    </button>
  </div>
);;

export default RenderButton;
