export const SettingsH1 = ({ text }) => {
  return (
    <h1 className="z-10 fixed top-0 lg:inset-x-auto font-notable text-neutral text-6xl">
      {text}
    </h1>
  );
};

export const SettingsH2 = ({ text }) => {
  return <h2 className="py-4 pb-8 pl-4 text-3xl text-center">{text}</h2>;
};

export const SettingsP = ({ children }) => {
  return <p className="max-w-md pb-4 text-justify m-1">{children}</p>
}
