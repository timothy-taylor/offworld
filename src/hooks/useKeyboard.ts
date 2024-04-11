import { useEffect } from "react";

export const useKeyboard = (key: string, callback: () => void) => {
    useEffect(() => {
        const keyUpHandler = (e: any) => {
            if (e.key === key) callback();
        };

        document.addEventListener("keyup", keyUpHandler);
        return () => {
            document.removeEventListener("keyup", keyUpHandler);
        };
    }, []);
};
