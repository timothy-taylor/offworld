import { useEffect } from "react";

export const useKeyboard = (key, handler) => {
  const keyUpHandler = (e) => {
    if (e.key === key) handler();
  };

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
};
