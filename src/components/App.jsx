import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Create from "./Create";
import Navbar from "./Navbar";
import Update from "./Update";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
