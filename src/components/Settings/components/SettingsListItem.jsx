export default ({ text, children }) => (
  <li className="flex items-center justify-between py-2 w-sm h-10">
    {text && <span className="pr-4">{`${text}${children ? ":" : ""}`}</span>}
    {children}
  </li>
);
