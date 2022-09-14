const SettingsButton = ({ text, handleClick }) => {
  return (
    <button
      className="border-x-2 rounded p-1 hover:bg-white hover:text-darkest"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default SettingsButton;
