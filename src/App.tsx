import { useAtomValue } from "jotai";
import { useCallback, useEffect, useId, useRef } from "react";
import ErrorBoundary from "./ErrorBoundary";
import MainCanvas from "./components/Canvas/MainCanvas";
import Zoom from "./components/Canvas/Zoom";
import Controls from "./components/Controls";
import Footer from "./components/Footer";
import Help from "./components/Help";
import InfoReadout from "./components/InfoReadout";
import Settings from "./components/Settings";
import Warning from "./components/Warning";
import { useAppState } from "./hooks/useAppState";
import { playerAtom } from "./stores/audio-engine-store";
import { imageAtom } from "./stores/canvas-store";

const App = () => {
    const [state, updateState] = useAppState();

    const settingsWindowId = useId(),
        helpWindowId = useId();

    const mainRef = useRef<HTMLCanvasElement | null>(null),
        zoomRef = useRef<HTMLCanvasElement | null>(null);

    const player = useAtomValue(playerAtom),
        image = useAtomValue(imageAtom);

    const drawZoom = useCallback((x: number, y: number) => {
        const ctx = zoomRef.current!.getContext("2d"),
            mainCanvas = mainRef.current;

        if (!ctx) return;

        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(
            mainCanvas!,
            Math.min(Math.max(0, x - 5), mainCanvas!.width - 10),
            Math.min(Math.max(0, y - 5), mainCanvas!.height - 10),
            8,
            8,
            0,
            0,
            300,
            300,
        );
    }, []);

    const handleMove = useCallback(
        (e: any) => {
            const mainCanvas = mainRef.current;
            if (!mainCanvas) return;

            const x = parseInt(e.pageX),
                y = parseInt(e.pageY);

            const imageData = mainCanvas
                .getContext("2d", {
                    willReadFrequently: true,
                })!
                .getImageData(x, y, 1, 1);

            drawZoom(x, y);
            player.updateParams(imageData!.data, x, y);
            updateState({ x, y });
        },
        [player, drawZoom, updateState],
    );

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
                ctx = el?.getContext("2d"),
                img = new Image();

            if (!el || !ctx) return;

            img.crossOrigin = "anonymous";
            img.src = image;
            img.onload = () => {
                //
                // add a little extra height / width to handle any mobile scrolling strangeness
                // but overflow is hidden by css
                el.width = document.documentElement.clientWidth + 600;
                el.height = document.documentElement.clientHeight + 600;
                ctx.fillStyle = ctx.createPattern(
                    img,
                    "repeat",
                ) as CanvasPattern;
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
        <ErrorBoundary>
            <Warning />
            <Controls state={state} helpId={helpWindowId} settingsId={settingsWindowId} />
            <InfoReadout state={state} />
            <Settings id={settingsWindowId} />
            <Help id={helpWindowId} />
            <MainCanvas ref={mainRef} handleMove={handleMove} />
            <Zoom ref={zoomRef} />
            <Footer />
        </ErrorBoundary>
    );
};

export default App;
