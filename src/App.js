import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import CheckInput from "./components/CheckInput";
import CheckTabs from "./components/CheckTabs";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="useInput" element={<CheckInput />} />
          <Route path="useTabs" element={<CheckTabs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
