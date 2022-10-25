const baseStyle =
  "fixed font-mono z-40 left-6 flex items-center content-around py-1 px-4 rounded-sm select-none bg-slate-300" +
  " -skew-y-2 opacity-80 hover:opacity-100";

//
// at least one of the addStyles needs to be "top-[x]" to position the container vertically
export default ({ addStyles, children }) => {
  return <div className={`${baseStyle} ${addStyles}`}>{children}</div>;
};
