import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
import LoginForm from "./LoginForm";
import TablePage from "./TablePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
};

export default App;
