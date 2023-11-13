import { useRef, useEffect } from "react";

export function useInterval(callback: () => void, delay: number): void {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick(): void {
      savedCallback.current && savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
