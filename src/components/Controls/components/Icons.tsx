type Props = {
    handleClick: () => void;
}

const effectStyles = "w-7 h-7 cursor-pointer hover:text-yellow-900";
export const NoDelayIcon = ({ handleClick }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={effectStyles}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Delay state is off"
        onClick={() => handleClick()}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
    </svg>
);

export const DelayIcon = ({ handleClick }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={effectStyles}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Delay state is on"
        onClick={() => handleClick()}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
        />
    </svg>
);

export const DryIcon = ({ handleClick }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={effectStyles}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Reverb state is off"
        onClick={() => handleClick()}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
    </svg>
);

export const ReverbIcon = ({ handleClick }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={effectStyles}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Reverb state is on"
        onClick={() => handleClick()}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
    </svg>
);

export const BackwardIcon = ({ handleClick }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={effectStyles}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Playback state is reverse"
        onClick={() => handleClick()}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
        />
    </svg>
);

export const ForwardIcon = ({ handleClick }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={effectStyles}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Playback state is normal"
        onClick={() => handleClick()}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
        />
    </svg>
);

export const StopIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline h-7 w-7 hover:text-yellow-900"
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
        className="inline h-7 w-7 hover:text-yellow-900"
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
        className="h-6 w-6 hover:text-yellow-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
    </svg>
);

export const HelpIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hover:text-yellow-900"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
    </svg>
);
