import React from "react";
import logo from "./logo.svg";
// import './assets/css/app.css'
import "./App.css";
import LeftSidebar from "./components/left_sidebar/LeftSidebar";
import { UserFile } from "./interfaces/UserFile";

const App: React.FC = () => {
  const [files, setFiles] = React.useState<UserFile[]>([]);

  return (
    <div className="main-grid | grid grid-cols-12 h-screen">
      <div className="sidebar | col-span-2">
        <LeftSidebar files={files} setFiles={setFiles} />
      </div>
      <div className="main-panel | col-span-7"></div>
      <div className="sidebar | col-span-3"></div>
    </div>
  );
};

export default App;
