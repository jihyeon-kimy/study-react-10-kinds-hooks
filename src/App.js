import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import CheckInput from "./components/CheckInput";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="useInput" element={<CheckInput />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
