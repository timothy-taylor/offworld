const style = "border-x-2 rounded p-1 hover:bg-white hover:text-darkest";

type Props = {
    text: string;
    handleClick: () => void;
};

export const SettingsButton = ({ text, handleClick }: Props) => (
    <button className={style} onClick={handleClick}>
        {text}
    </button>
);

export const SettingsButtonSubmit = ({ text }: Pick<Props, "text">) => (
    <button type="submit" className={style}>
        {text}
    </button>
);
