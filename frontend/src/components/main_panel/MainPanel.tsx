import React from "react";

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
    const imageFromIndex = filteredImageFiles[imageIndex];

    return (
        <div className="main-panel | flex justify-center items-center | w-full h-screen">
            {/* <div className="images | m-1"></div> */}
            {filteredImageFiles.length !== 0 ? (
                <div
                    key={imageFromIndex.name}
                    className="image-container |  flex justify-center items-center | w-4/5 h-4/5"
                >
                    <img
                        src={imageFromIndex.preview}
                        className="image | my-1 h-full w-auto object-contain"
                        alt=""
                    />
                </div>
            ) : null}
        </div>
    );
};

export default MainPanel;
