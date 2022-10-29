import React from "react";
import Canvas from "./mp_components/Canvas";
interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    filteredImageFiles: any;
    imageIndex: number;
}
const MainPanel = ({
    files,
    setFiles,
    imageFileTypes,
    filteredImageFiles,
    imageIndex,
}: Props) => {
    const imageAtIndex = filteredImageFiles[imageIndex];

    return (
        <div className="main-panel | flex justify-center items-center | w-full h-screen">
            <Canvas
                filteredImageFiles={filteredImageFiles}
                imageIndex={imageIndex}
            />
        </div>
    );
};

export default MainPanel;
