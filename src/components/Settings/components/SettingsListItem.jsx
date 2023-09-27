const SettingsListItem = ({ text, children }) => (
    <li className="w-sm flex h-10 items-center justify-between py-2">
        {text && (
            <span className="pr-4">{`${text}${children ? ":" : ""}`}</span>
        )}
        {children}
    </li>
);

export default SettingsListItem;
