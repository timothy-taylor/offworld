import clsx from "clsx";

const Tooltip = ({ text, children }) => {
    return (
        <span className="group">
            {children}
            <span
                className={clsx(
                    "absolute top-0 -right-3 hidden w-32 translate-x-full justify-center rounded-lg bg-gray-700 px-2 py-1 text-center text-sm text-white group-hover:flex",
                    "before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700 before:content-['']",
                )}
            >
                {text}
            </span>
        </span>
    );
};

export default Tooltip;
