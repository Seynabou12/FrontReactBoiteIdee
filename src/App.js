
import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';


import Home from './Pages/Home';
import Add from './Pages/Add';


function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </div>

  );
}
export default App;
