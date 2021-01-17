import { useEffect, useState } from "react";

const UseDisableBodyScroll = (disable) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (disable) {
      setScrollY(window.scrollY);
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.overflowY = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      return;
    }

    document.body.setAttribute("style", "");
    window.scrollTo(0, scrollY);
  }, [disable]);
};

export default UseDisableBodyScroll;
