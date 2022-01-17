export const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 cursor-pointer hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => document.getElementById("what-is-it").classList.remove("hidden")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
export const StopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
    />
  </svg>
);
export const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const UserIcon = () => (
  <svg
    id="user-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="fixed w-6 h-6 cursor-pointer text-slate-500 hover:text-slate-300 left-10 top-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() =>
      document.getElementById("user-menu").classList.remove("hidden")
    }
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fixed w-6 h-6 cursor-pointer left-20 top-11 text-slate-500 hover:text-slate-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => document.getElementById("settings-menu").classList.remove("hidden")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

// props.menuID
export const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute w-6 h-6 cursor-pointer top-4 right-4 hover:text-slate-300 animate-pulse"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => document.getElementById(props.menuID).classList.add("hidden")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
