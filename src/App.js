import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckAxios from "./components/CheckAxios";
import CheckBeforeLeave from "./components/CheckBeforeLeave";
import CheckClick from "./components/CheckClick";
import CheckConfirm from "./components/CheckConfirm";
import CheckFadeIn from "./components/CheckFadeIn";
import CheckFullscreen from "./components/CheckFullscreen";
import CheckInput from "./components/CheckInput";
import CheckNetwork from "./components/CheckNetwork";
import CheckNotification from "./components/CheckNotification";
import CheckPreventLeave from "./components/CheckPreventLeave";
import CheckScroll from "./components/CheckScroll";
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
          <Route path="useNetwork" element={<CheckNetwork />} />
          <Route path="useScroll" element={<CheckScroll />} />
          <Route path="useFullscreen" element={<CheckFullscreen />} />
          <Route path="useNotification" element={<CheckNotification />} />
          <Route path="useAxios" element={<CheckAxios />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
