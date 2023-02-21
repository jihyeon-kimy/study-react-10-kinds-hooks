import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function CheckFadeIn() {
  const fadeIn = useFadeIn(2);
  return (
    <>
      <h1>useFadeIn</h1>
      <div {...fadeIn}>Test FadeIn!</div>
    </>
  );
}

export default CheckFadeIn;
