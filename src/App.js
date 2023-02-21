import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckClick from "./components/CheckClick";
import CheckConfirm from "./components/CheckConfirm";
import CheckInput from "./components/CheckInput";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
