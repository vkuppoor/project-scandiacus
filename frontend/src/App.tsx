import React from "react";
import "./App.css";
import LeftSidebar from "./components/left_sidebar/LeftSidebar";
import MainPanel from "./components/main_panel/MainPanel";
import RightSidebar from "./components/right_sidebar/RightSidebar";

export type labelsObj = {
    labelNames: string[];
    isLabelEditOpen: boolean[];
};

export type exportInfoType = {
    outputFormat: "";
    datasetInfo: {
        year: string;
        version: string;
        description: string;
        contributer: string;
        url: string;
        dateCreated: string;
    };
    licenses: licenseType[];
    datasetFiles: datasetFileType[];
};

type licenseType = {
    url: string;
    name: string;
};

type datasetFileType = {
    imageName: string;
    imgSize: {
        height: number;
        width: number;
    };
    annotations: annotationType[];
};

type annotationType = {
    coord: coordType[];
    label: string;
};

type coordType = number[];

const App: React.FC = () => {
    const [files, setFiles] = React.useState<any>([]);

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

    const [imageIndex, setImageIndex] = React.useState<number>(0);

    const [filteredOutputFiles, setFilteredOutputFiles] = React.useState<any>(
        []
    );

    const [labels, setLabels] = React.useState<labelsObj>({
        labelNames: ["cats", "dogs"],
        isLabelEditOpen: [false, false],
    });

    const [exportInfo, setExportInfo] = React.useState<exportInfoType>({
        outputFormat: "",
        datasetInfo: {
            year: "",
            version: "",
            description: "",
            contributer: "",
            url: "",
            dateCreated: "",
        },
        licenses: [],
        datasetFiles: [],
    });

    const [selectedLabel, setSelectedLabel] = React.useState<string>("");

    // console.log("selected label: ", selectedLabel);

    // console.log("rejectedFiles", rejectedFiles);

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
                    filteredImageFiles={filteredImageFiles}
                    setFilteredImageFiles={setFilteredImageFiles}
                    imageIndex={imageIndex}
                    setImageIndex={setImageIndex}
                    filteredOutputFiles={filteredOutputFiles}
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
                    imageIndex={imageIndex}
                    selectedLabel={selectedLabel}
                />
            </div>
            <div className="sidebar | col-span-3">
                <RightSidebar
                    labels={labels}
                    setLabels={setLabels}
                    setSelectedLabel={setSelectedLabel}
                />
            </div>
        </div>
    );
};

export default App;
