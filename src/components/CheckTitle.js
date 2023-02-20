import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function CheckTitle() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 5000); // 5초후 Title을 Home으로 변경. titleUpdator 확인용
  return (
    <>
      <h1>useTitle</h1>
    </>
  );
}

export default CheckTitle;
