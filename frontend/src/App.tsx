import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import FileManager from './components/FileManager';

function App() {
  return (
      <div className="main-grid">
        <div className="component-col left-sidebar">
          <FileManager />
        </div>
        <div className="component-col main-panel"></div>
        <div className="component-col right-sidebar"></div>
      </div>
    );
}

export default App;
