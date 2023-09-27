import { useEffect, useId, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { playerAtom } from "./stores/audio-engine-store";
import { imageAtom } from "./stores/canvas-store";

// components
import Warning from "./components/Warning";
import Controls from "./components/Controls";
import InfoReadout from "./components/InfoReadout";
import MainCanvas from "./components/Canvas/MainCanvas";
import Zoom from "./components/Canvas/Zoom";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Settings from "./components/Settings";
import { useCallback } from "react";

const App = () => {
    const settingsWindowId = useId(),
        helpWindowId = useId();

    //
    // mouse coordinates to pass to <InfoReadout />
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    //
    // refs to attach to <canvas> elements
    const mainRef = useRef(),
        zoomRef = useRef();

    //
    // global store getters
    const player = useAtomValue(playerAtom),
        image = useAtomValue(imageAtom);

    const drawZoom = useCallback(
        (x, y) => {
            const ctx = zoomRef.current.getContext("2d"),
                mainCanvas = mainRef.current;

            ctx.imageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.msImageSmoothingEnabled = false;
            ctx.drawImage(
                mainCanvas,
                Math.min(Math.max(0, x - 5), mainCanvas.width - 10),
                Math.min(Math.max(0, y - 5), mainCanvas.height - 10),
                8,
                8,
                0,
                0,
                300,
                300,
            );
        },
        [mainRef, zoomRef],
    );

    const handleMove = (e) => {
        const x = e.pageX,
            y = e.pageY;

        const ctx = mainRef.current.getContext("2d", {
                willReadFrequently: true,
            }),
            { data } = ctx.getImageData(x, y, 1, 1);

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
            const el = mainRef.current,
                ctx = el.getContext("2d"),
                img = new Image();

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
        drawZoom(100, 100);
        drawCanvas();

        window.addEventListener("resize", drawCanvas);
        return () => {
            window.removeEventListener("resize", drawCanvas);
        };
    }, [image, drawZoom]);

    return (
        <main className="h-screen w-screen overflow-hidden overscroll-contain">
            <Warning />
            <Controls settingsId={settingsWindowId} helpId={helpWindowId} />
            <InfoReadout x={coordinates.x} y={coordinates.y} />
            <Settings id={settingsWindowId} />
            <Help id={helpWindowId} />
            <MainCanvas ref={mainRef} handleMove={handleMove} />
            <Zoom ref={zoomRef} />
            <Footer />
        </main>
    );
};

export default App;
