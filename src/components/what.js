import { CloseIcon } from "./icons";

const WhatIsIt = () => {
  return (
    <div
      id="what-is-it"
      className="shadow-2xl fixed hidden font-mono rounded-md p-4 inset-8 md:inset-56 bg-slate-500 z-[110] text-center"
    >
      <CloseIcon menuID="what-is-it" />
      <h1 className="py-4 text-xl">What is this?</h1>
      <p className="py-4">
        a granular synthesis engine controlled by scanning image data via mouse
        movement
      </p>
      <span className="pt-4">
        final Javascript project for The Odin Project by{" "}
      </span>
      <a
        href="https://bvwtgt.xyz"
        className="underline hover:bg-slate-700 hover:text-slate-300"
      >
        Tim Taylor
      </a>
    </div>
  );
};

export default WhatIsIt;
