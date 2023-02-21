import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

function CheckFullscreen() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <>
      <h1>useFullscreen</h1>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </>
  );
}

export default CheckFullscreen;
