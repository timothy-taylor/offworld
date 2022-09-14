import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { playerAtom } from "../../stores/audio-engine-store";
import { imageAtom } from "../../stores/canvas-store";

// components
import Zoom from "./Zoom";
import Info from "../Info";
import ControlHeader from "../ControlHeader";
import MainCanvas from "./MainCanvas";
import Footer from "../Footer";
import Warning from "../Warning";

const Offworld = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const canvas = useRef();
  const zoom = useRef();

  const [player] = useAtom(playerAtom);
  const [defaultImage] = useAtom(imageAtom);

  const drawZoom = (x, y) => {
    const el = canvas.current;
    const ctx = zoom.current.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.drawImage(
      el,
      Math.min(Math.max(0, x - 5), el.width - 10),
      Math.min(Math.max(0, y - 5), el.height - 10),
      10,
      10,
      0,
      0,
      200,
      200
    );
  };

  const handleMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const ctx = canvas.current.getContext("2d");
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
      const el = canvas.current;
      const ctx = el.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = defaultImage;
      img.onload = () => {
        el.width = document.documentElement.clientWidth;
        el.height = document.documentElement.clientHeight;
        ctx.fillStyle = ctx.createPattern(img, "repeat");
        ctx.fillRect(0, 0, el.width, el.height);
        img.style.display = "none";
      };
    };

    drawCanvas();
    window.addEventListener("resize", drawCanvas);

    return () => {
      window.removeEventListener("resize", drawCanvas);
    };
  }, [defaultImage]);

  return (
    <main className="w-screen h-screen overflow-x-hidden overscroll-contain">
      <Warning />
      <ControlHeader />
      <Info x={coordinates.x} y={coordinates.y} />
      <MainCanvas ref={canvas} handleMove={handleMove} />
      <Zoom ref={zoom} />
      <Footer />
    </main>
  );
};

export default Offworld;
