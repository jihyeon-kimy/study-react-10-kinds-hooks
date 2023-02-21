import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function CheckBeforeLeave() {
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);
  return (
    <>
      <h1>useBeforeLeave</h1>
    </>
  );
}

export default CheckBeforeLeave;
