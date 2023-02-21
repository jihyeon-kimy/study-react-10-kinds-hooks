import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef(); // useReft는 document.querySelector()과 동일

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};

function CheckClick() {
  const sayHello = () => console.log("Hello");
  const click = useClick(sayHello);
  return (
    <>
      <h1>useClick</h1>
      <div ref={click}>Click Here</div>
    </>
  );
}

export default CheckClick;
