const baseStyles =
  "fixed left-6 z-10 flex items-center p-4 font-mono border-2 rounded-sm border-slate-400" +
  " bg-slate-500 -skew-y-2 opacity-80 hover:opacity-100";

const LeftFixedIconButton = ({ id, top, hidden, handleClick, icon, text }) => {
  return (
    <button
      id={id}
      className={`${baseStyles} ${top} ${hidden && "hidden"}`}
      onClick={handleClick}
    >
      {icon}
      <span className="pl-2">{text}</span>
    </button>
  );
};

export default LeftFixedIconButton;