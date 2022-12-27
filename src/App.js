import { Routes, Route } from "react-router-dom";

// import { ContentWorkers } from "./components/ContentWorkers/ContentWorkers";
// import { ContentTasks } from "./components/ContentTasks/ContentTasks";
import { MainPage } from "./components/MainPage/MainPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
