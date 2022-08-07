import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftSidebar from "./components/left_sidebar/LeftSidebar";
import MainPanel from "./components/main_panel/MainPanel";

export interface UserFile {
  name: React.Key | null | undefined;
  preview: string | undefined;
}

const App: React.FC = () => {
  const [files, setFiles] = React.useState<UserFile[]>([]);

  return (
    <div className="main-grid | grid grid-cols-12 h-screen">
      <div className="sidebar | col-span-2">
        <LeftSidebar files={files} setFiles={setFiles} />
      </div>
      <div className="main-panel | flex col-span-7 justify-center">
        <MainPanel files={files} setFiles={setFiles} />
      </div>
      <div className="sidebar | col-span-3"></div>
    </div>
  );
};

export default App;
