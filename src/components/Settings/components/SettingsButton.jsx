const style = "border-x-2 rounded p-1 hover:bg-white hover:text-darkest";

export const SettingsButton = ({ text, handleClick }) => (
    <button className={style} onClick={handleClick}>
        {text}
    </button>
);

export const SettingsButtonSubmit = ({ text }) => (
    <button type="submit" className={style}>
        {text}
    </button>
);
