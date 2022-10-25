export default ({ text, children }) => (
  <li className="flex items-center justify-between py-2 w-sm">
    <span className="pr-4">{text}:</span>
    {children}
  </li>
);