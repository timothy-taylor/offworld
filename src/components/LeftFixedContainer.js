const baseStyle =
  "font-mono z-10 fixed left-6 flex items-center content-around py-1 px-4 rounded-sm select-none bg-slate-300" +
  " -skew-y-2 opacity-80 hover:opacity-100";

const LeftFixedContainer = ({ top, children }) => {
  return <div className={`top-${top} ${baseStyle}`}>{children}</div>;
};

export default LeftFixedContainer;
