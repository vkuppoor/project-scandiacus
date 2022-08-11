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
    // const images = filteredImageFiles.map((file: any) => (
    //     <div key={file.name}>
    //         <img src={file.preview} className="image | w-full my-1" alt="" />
    //         <p>{file.path}</p>
    //     </div>
    // ));

    const imageFromIndex = filteredImageFiles[imageIndex];
    // console.log("imageIndex", imageIndex);
    // console.log("imageFromIndex", imageFromIndex);
    // console.log("imageFromIndex Name", imageFromIndex.name);
    // const image =
    //     filteredImageFiles.length === 0 ? (
    //         <div key={imageFromIndex.name}>
    //             <img
    //                 src={imageFromIndex.preview}
    //                 className="image | w-full my-1"
    //                 alt=""
    //             />
    //             <p>{imageFromIndex.path}</p>
    //         </div>
    //     ) : null;

    return (
        <div className="main-panel | flex justify-center items-center | w-full">
            {/* <div className="images | m-1"></div> */}
            {filteredImageFiles.length !== 0 ? (
                <div
                    key={imageFromIndex.name}
                    className="image-container | flex justify-center | w-4/5"
                >
                    <img
                        src={imageFromIndex.preview}
                        className="image | h-full my-1"
                        alt=""
                    />
                </div>
            ) : null}
        </div>
    );
};

export default MainPanel;
