import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import TopicDetail from './containers/TopicDetail';
import Home from './containers/Home';

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path=":topic" element={<TopicDetail/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
