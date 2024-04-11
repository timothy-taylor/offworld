import clsx from "clsx";

//
// at least one of the addStyles needs to be "top-[x]" to position the container vertically
const LeftFixedContainer = ({ addStyles, children }) => (
    <div
        className={clsx(
            "fixed left-6 z-40 flex -skew-y-2 select-none content-around items-center rounded-sm bg-slate-300 py-1 px-4 font-mono opacity-80 hover:opacity-100",
            addStyles,
        )}
    >
        {children}
    </div>
);

export default LeftFixedContainer;
