import React from 'react';
import './style.css';
import Home from './Components/Home.js';
import Model from './Components/model.js';
import Sidebar from './Components/sidebar.js';
export default function App() {
  return (
    <div>
      <Home/>
      <Model />
      <Sidebar />
    </div>
  );
}
