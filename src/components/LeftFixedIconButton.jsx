const baseStyles =
  "fixed left-6 z-10 flex items-center p-3 font-mono border-2 rounded-sm border-slate-400" +
  " bg-slate-400 -skew-y-2 opacity-80 hover:opacity-100";

//
// at least one of the addStyles needs to be "top-[x]" to vertical position of the button
const LeftFixedIconButton = ({ id, addStyles, handleClick, icon, text }) => {
  return (
    <button
      id={id}
      className={`${baseStyles} ${addStyles}`}
      onClick={handleClick}
    >
      {icon}
      <span className="pl-2">{text}</span>
    </button>
  );
};

export default LeftFixedIconButton;
