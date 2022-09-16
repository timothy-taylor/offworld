import { useEffect } from "react";

export const useKey = (key, handler) => {
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
