const style = "border-x-2 rounded p-1 hover:bg-white hover:text-darkest";

const SettingsButton = ({ text, handleClick }) => {
  return (
    <button className={style} onClick={handleClick}>
      {text}
    </button>
  );
};

export const SettingsButtonSubmit = ({ text }) => {
  return (
    <button type="submit" className={style}>
      {text}
    </button>
  );
};

export default SettingsButton;
