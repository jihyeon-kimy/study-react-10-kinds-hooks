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
  // 5초후 Title을 Home으로 변경. titleUpdator 확인용
  //   setTimeout(() => {
  //     titleUpdater("Home");
  //   }, 5000);
  return (
    <>
      <h1>useTitle</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          titleUpdater(event.target.title.value);
        }}>
        <input name="title" placeholder="새로운 Title" />
        <button>수정하기</button>
      </form>
    </>
  );
}

export default CheckTitle;
