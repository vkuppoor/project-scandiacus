import React from "react";

import FolderUpload from "./lf_components/FolderUpload";
import FolderDisplay from "./lf_components/FolderDisplay";
import ImgNavButtons from "./lf_components/ImgNavButtons";
import { NumberLiteralType } from "typescript";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    outputFileTypes: string[];
    filteredImageFiles: any;
    setFilteredImageFiles: React.Dispatch<React.SetStateAction<any>>;
    imageIndex: number;
    setImageIndex: React.Dispatch<React.SetStateAction<number>>;
    filteredOutputFiles: any;
    setFilteredOutputFiles: React.Dispatch<React.SetStateAction<any>>;
    onFilterFiles: any;
}

const LeftSidebar = ({
    files,
    setFiles,
    imageFileTypes,
    outputFileTypes,
    filteredImageFiles,
    setFilteredImageFiles,
    imageIndex,
    setImageIndex,
    filteredOutputFiles,
    setFilteredOutputFiles,
    onFilterFiles,
}: Props) => {
    const [rejectedFiles, setRejectedFiles] = React.useState<any>([]);

    const [isFileRejected, setIsFileRejected] = React.useState<boolean>(false);

    const [isFileListActive, setIsFileListActive] =
        React.useState<boolean>(false);

    return (
        <div className="left-sidebar | flex flex-col">
            <div className="top | flex flex-col justify-around">
                <FolderUpload
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                    outputFileTypes={outputFileTypes}
                    setFilteredImageFiles={setFilteredImageFiles}
                    setFilteredOutputFiles={setFilteredOutputFiles}
                    setRejectedFiles={setRejectedFiles}
                    setIsFileListActive={setIsFileListActive}
                    setIsFileRejected={setIsFileRejected}
                    setImageIndex={setImageIndex}
                    onFilterFiles={onFilterFiles}
                />
                <FolderDisplay
                    filteredImageFiles={filteredImageFiles}
                    filteredOutputFiles={filteredOutputFiles}
                    rejectedFiles={rejectedFiles}
                    setRejectedFiles={setRejectedFiles}
                    isFileRejected={isFileRejected}
                    setIsFileRejected={setIsFileRejected}
                    isFileListActive={isFileListActive}
                    setIsFileListActive={setIsFileListActive}
                />
            </div>
            <div className="bottom | flex flex-col justify-end items-center">
                <ImgNavButtons
                    filteredImageFiles={filteredImageFiles}
                    imageIndex={imageIndex}
                    setImageIndex={setImageIndex}
                />
            </div>
        </div>
    );
};

export default LeftSidebar;
