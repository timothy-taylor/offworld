import { CloseIcon } from './icons';

const Settings = () => {
  return (
    <div id="settings-menu" className="fixed shadow-2xl hidden font-mono rounded-md p-4 select-none skew-y-3 md:skew-y-6 top-80 right-16 bg-slate-500 z-[100] opacity-90">
      <CloseIcon menuID="settings-menu"/>
      <h1>Settings</h1>
      <p>There may be settings here some day</p>
    </div>
  );
};

export default Settings;
