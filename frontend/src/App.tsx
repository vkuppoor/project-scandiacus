import React from 'react';
import logo from './logo.svg';
// import './assets/css/app.css'
import './App.css'
import FileManager from './components/FileManager';

function App() {
  return (
      <div id="main-grid" className="grid grid-cols-4 h-screen">
        <div className="sidebar">
          <FileManager />
        </div>
        <div className="col-span-2"></div>
        <div className="sidebar"></div>
      </div>
    );
}

export default App;
