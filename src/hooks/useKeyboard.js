import { useEffect } from "react";

export const useKeyboard = (key, callback) => {
  const keyUpHandler = (e) => {
    if (e.key === key) callback();
  };

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
};
