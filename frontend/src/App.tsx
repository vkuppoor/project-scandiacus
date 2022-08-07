import React from 'react';
import logo from './logo.svg';
// import './assets/css/app.css'
import './App.css'
import FileManager from './components/FileManager';

function App() {
  return (
      <div className="main-grid | grid grid-cols-12 h-screen">
        <div className="sidebar | col-span-2">
          <FileManager />
        </div>
        <div className="main-panel | col-span-7"></div>
        <div className="sidebar | col-span-3"></div>
      </div>
    );
}

export default App;
