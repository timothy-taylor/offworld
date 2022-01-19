//
// passing in the toggleDelay fn
export const NoDelayIcon = (props) => (
  <svg
    id="nodelay-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => props.onclick()}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);
export const DelayIcon = (props) => (
  <svg
    id="delay-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => props.onclick()}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
    />
  </svg>
);

//
// passing in the toggleReverb fn
export const DryIcon = (props) => (
  <svg
    id="dry-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => props.onclick()}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);
export const ReverbIcon = (props) => (
  <svg
    id="reverb-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => props.onclick()}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
    />
  </svg>
);

//
// passing in the toggleReverse fn
export const BackwardIcon = (props) => (
  <svg
    id="backward-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => {
      props.onclick();
      document.getElementById("forward-icon").classList.remove("hidden");
      document.getElementById("backward-icon").classList.add("hidden");
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
    />
  </svg>
);
export const ForwardIcon = (props) => (
  <svg
    id="forward-icon"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => {
      props.onclick();
      document.getElementById("forward-icon").classList.add("hidden");
      document.getElementById("backward-icon").classList.remove("hidden");
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
    />
  </svg>
);

//
// displays when loading audio into the buffer
export const LoadIcon = (props) => (
  <svg
    id={props.loadID}
    xmlns="http://www.w3.org/2000/svg"
    className="sticky hidden float-right w-6 h-6 text-yellow-400 -translate-y-6 -translate-x-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

//
// props.checkID
export const CheckIcon = (props) => (
  <svg
    id={props.checkID}
    xmlns="http://www.w3.org/2000/svg"
    className="sticky hidden float-right w-6 h-6 text-green-400 -translate-y-6 -translate-x-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 cursor-pointer hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() =>
      document.getElementById("what-is-it").classList.remove("hidden")
    }
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

export const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer w-7 h-7 hover:text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() =>
      document.getElementById("settings-menu").classList.remove("hidden")
    }
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

//
// props.menuID
export const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute w-8 h-8 cursor-pointer top-4 right-4 hover:text-slate-400 animate-pulse"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() =>
      document.getElementById(props.menuID).classList.add("hidden")
    }
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

//
// props.str
export const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 cursor-pointer hover:text-slate-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={() => {
      sessionStorage.removeItem(props.str);
      document
        .getElementById(props.str.split("-").pop())
        .classList.add("hidden");
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

export const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 text-yellow-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);
