const SettingsLabel = ({ text }) => <span className="pr-4">{text}:</span>;

const SettingsListItem = ({ text, children }) => (
  <li className="flex items-center justify-between py-2 w-sm">
    <SettingsLabel text={text} />
    {children}
  </li>
);

export default SettingsListItem;
