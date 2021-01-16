import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { breakPoint } from "../styles/_variables";

const { mobileXL } = breakPoint;

const UseIsBigScreen = () => {
  const isBigScreen = useMediaQuery({ minDeviceWidth: mobileXL + 1 });
  const [bigScreen, setBigScreen] = useState(false);

  useEffect(() => {
    setBigScreen(isBigScreen);
  }, [isBigScreen]);
  return bigScreen;
};

export default UseIsBigScreen;
