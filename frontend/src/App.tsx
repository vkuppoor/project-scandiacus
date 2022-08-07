import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftSidebar from "./components/left_sidebar/LeftSidebar";
import MainPanel from "./components/main_panel/MainPanel";

const App: React.FC = () => {
    const [files, setFiles] = React.useState<any>([]);
    console.log("files", files);

    const [imageFileTypes, setImageFileTypes] = React.useState<string[]>([
        ".jpeg",
        ".jpg",
        ".png",
        ".bmp",
        ".tif",
        ".tiff",
        ".dng",
        ".webp",
        ".mpo",
        ".htm",
        ".html",
    ]);

    return (
        <div className="main-grid | grid grid-cols-12 h-screen">
            <div className="sidebar | col-span-2">
                <LeftSidebar
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                />
            </div>
            <div className="main-panel | flex col-span-7 justify-center">
                <MainPanel
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                />
            </div>
            <div className="sidebar | col-span-3"></div>
        </div>
    );
};

export default App;
