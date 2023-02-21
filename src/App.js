import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckBeforeLeave from "./components/CheckBeforeLeave";
import CheckClick from "./components/CheckClick";
import CheckConfirm from "./components/CheckConfirm";
import CheckFadeIn from "./components/CheckFadeIn";
import CheckInput from "./components/CheckInput";
import CheckPreventLeave from "./components/CheckPreventLeave";
import CheckTabs from "./components/CheckTabs";
import CheckTitle from "./components/CheckTitle";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="useInput" element={<CheckInput />} />
          <Route path="useTabs" element={<CheckTabs />} />
          <Route path="useTitle" element={<CheckTitle />} />
          <Route path="useClick" element={<CheckClick />} />
          <Route path="useConfirm" element={<CheckConfirm />} />
          <Route path="usePreventLeave" element={<CheckPreventLeave />} />
          <Route path="useBeforeLeave" element={<CheckBeforeLeave />} />
          <Route path="useFadeIn" element={<CheckFadeIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
