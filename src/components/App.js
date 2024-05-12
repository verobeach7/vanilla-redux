import React from "react";
// ReactRouter v6부터는 HashRouter 사용하지 않음. BrowserRouter로 사용하기
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        {/*  */}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
