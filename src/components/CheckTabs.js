import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3",
  },
  {
    tab: "Section 4",
    content: "I'm the content of the Section 4",
  },
  {
    tab: "Section 5",
    content: "I'm the content of the Section 5",
  },
  {
    tab: "Section 6",
    content: "I'm the content of the Section 6",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

function CheckTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <>
      <h1>useTab</h1>
      {content.map((section, idx) => (
        <button
          onClick={() => {
            changeItem(idx);
          }}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
}

export default CheckTabs;
