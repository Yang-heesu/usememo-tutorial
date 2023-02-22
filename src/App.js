import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Calculator from './Calculator';
import Travel from './Travel';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/calculator">계산기</Link></li>
          <li><Link to="/travel">여행</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/travel" element={<Travel/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
