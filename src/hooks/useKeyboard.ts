import { useEffect } from "react";

export const useKeyboard = (key, callback) => {
    useEffect(() => {
        const keyUpHandler = (e) => {
            if (e.key === key) callback();
        };

        document.addEventListener("keyup", keyUpHandler);
        return () => {
            document.removeEventListener("keyup", keyUpHandler);
        };
    }, []);
};
