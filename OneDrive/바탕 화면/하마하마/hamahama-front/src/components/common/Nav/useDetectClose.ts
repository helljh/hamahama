import { useEffect, useState, useRef, RefObject } from "react";

const useDetectClose = (
  initialState: boolean
): [boolean, RefObject<HTMLDivElement>, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const ref = useRef<HTMLDivElement | null>(null);
  //DOM 요소 참조

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current !== null && !ref.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
};

export default useDetectClose;
