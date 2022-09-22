import { useEffect, useId, useRef, useState } from "react";
import { useAtom } from "jotai";
import { playerAtom } from "./stores/audio-engine-store";
import { imageAtom } from "./stores/canvas-store";

// components
import Warning from "./components/Warning";
import Controls from "./components/Controls";
import InfoReadout from "./components/InfoReadout";
import MainCanvas from "./components/MainCanvas";
import Zoom from "./components/Zoom";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Settings from "./components/Settings";

const App = () => {
  const settingsId = useId();
  const helpId = useId();

  //
  // mouse coordinates to pass to <InfoReadout />
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  //
  // refs to attach to <canvas> tags
  const mainRef = useRef();
  const zoomRef = useRef();

  //
  // global store getters
  const [player] = useAtom(playerAtom);
  const [image] = useAtom(imageAtom);

  const drawZoom = (x, y) => {
    const el = mainRef.current;
    const ctx = zoomRef.current.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.drawImage(
      el,
      Math.min(Math.max(0, x - 5), el.width - 10),
      Math.min(Math.max(0, y - 5), el.height - 10),
      8,
      8,
      0,
      0,
      300,
      300
    );
  };

  const handleMove = (e) => {
    let x, y;
    if (e?.touches) {
      x = e.touches.item(0).pageX;
      y = e.touches.item(0).pageY;
    } else {
      x = e.pageX;
      y = e.pageY;
    }
    const ctx = mainRef.current.getContext("2d");
    const { data } = ctx.getImageData(x, y, 1, 1);
    drawZoom(x, y);
    player.updateParams(data, x, y);
    setCoordinates({ x, y });
  };

  //
  // shutdown audio on unmount
  useEffect(() => {
    return () => {
      player.handleAbort();
    };
  }, [player]);

  //
  // draw background on mount, window resize, or image change
  useEffect(() => {
    const drawCanvas = () => {
      const el = mainRef.current;
      const ctx = el.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = image;
      img.onload = () => {
        //
        // add a little extra height / width to handle any mobile scrolling strangeness
        // but overflow is hidden by css
        el.width = document.documentElement.clientWidth + 600;
        el.height = document.documentElement.clientHeight + 600;
        ctx.fillStyle = ctx.createPattern(img, "repeat");
        ctx.fillRect(0, 0, el.width + 600, el.height + 600);
        img.style.display = "none";
      };
    };

    //
    // initially draw our canvases
    drawZoom(100,100)
    drawCanvas();

    //
    // and then handle window resize
    window.addEventListener("resize", drawCanvas);

    return () => {
      window.removeEventListener("resize", drawCanvas);
    };
  }, [image]);

  return (
    <main className="w-screen h-screen overflow-hidden overscroll-contain">
      <Warning />
      <Controls settingsId={settingsId} helpId={helpId} />
      <InfoReadout x={coordinates.x} y={coordinates.y} />
      <Settings id={settingsId} />
      <Help id={helpId} />
      <MainCanvas ref={mainRef} handleMove={handleMove} />
      <Zoom ref={zoomRef} />
      <Footer />
    </main>
  );
};

export default App;