import clsx from "clsx";

//
// at least one of the addStyles needs to be "top-[x]" to vertical position of the button
const LeftFixedIconButton = ({ id, addStyles, handleClick, icon, text }) => (
    <button
        id={id}
        className={clsx(
            "fixed left-6 z-10 flex -skew-y-2 items-center rounded-sm border-2 border-slate-400 bg-slate-400 p-3 font-mono opacity-80 hover:opacity-100",
            addStyles,
        )}
        onClick={handleClick}
    >
        {icon}
        <span className="pl-2">{text}</span>
    </button>
);

export default LeftFixedIconButton;
