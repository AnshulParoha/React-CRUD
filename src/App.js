import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Create from "./components/create";
import Edit from "./components/edit";


function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
