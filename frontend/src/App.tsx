import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftSidebar from "./components/left_sidebar/LeftSidebar";
import MainPanel from "./components/main_panel/MainPanel";

const App: React.FC = () => {
    const [files, setFiles] = React.useState<any>([]);
    // console.log("files", files);

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

    const [outputFileTypes, setOutputFileTypes] = React.useState<any>([
        ".txt",
        ".json",
        ".xml",
    ]);

    const [filteredImageFiles, setFilteredImageFiles] = React.useState<any>([]);
    // console.log("filteredImageFiles", filteredImageFiles);

    const [filteredOutputFiles, setFilteredOutputFiles] = React.useState<any>(
        []
    );
    // console.log("filteredOutputFiles", filteredOutputFiles);

    const handleFilterFiles = (f: any, fTypes: string[]) => {
        const filteredFiles = f.filter((file: any) => {
            return fTypes.find((element) => {
                return file.path.indexOf(element) !== -1;
            });
        });
        return filteredFiles;
    };

    return (
        <div className="main-grid | grid grid-cols-12 h-screen">
            <div className="sidebar | col-span-2">
                <LeftSidebar
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                    outputFileTypes={outputFileTypes}
                    setFilteredImageFiles={setFilteredImageFiles}
                    setFilteredOutputFiles={setFilteredOutputFiles}
                    onFilterFiles={handleFilterFiles}
                />
            </div>
            <div className="main-panel | flex col-span-7 justify-center">
                <MainPanel
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                    filteredImageFiles={filteredImageFiles}
                />
            </div>
            <div className="sidebar | col-span-3"></div>
        </div>
    );
};

export default App;
