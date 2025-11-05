// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllItemsPage from "./pages/AllItemsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all/:type" element={<AllItemsPage />} />






      
    </Routes>
  );
}




export default App;
