const RenderWithTooltip = ({ tooltipText, children }) => {
  return (
    <span className="group">
      {children}
      <span className="absolute hidden group-hover:flex -top-2 -right-3 translate-x-full w-32 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700">
        {tooltipText}
      </span>
    </span>
  );
};

export default RenderWithTooltip;