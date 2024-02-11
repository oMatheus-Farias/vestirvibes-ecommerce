import { createContext, ReactNode, useEffect, useState } from "react";

interface ScreenSizeContextData {
  dasktop: boolean | null;
}

export const ScreenSizeContext = createContext({} as ScreenSizeContextData);

const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [dasktop, setDasktop] = useState<boolean | null>(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const sizeScreen = window.innerWidth;

    sizeScreen >= 768 ? setDasktop(true) : setDasktop(false);
  };

  return (
    <ScreenSizeContext.Provider value={{ dasktop }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
