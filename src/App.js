import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "./components/MainPage/MainPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
