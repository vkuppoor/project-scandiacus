import React from "react";

import FolderUpload from "./lf_components/FolderUpload";
import FolderDisplay from "./lf_components/FolderDisplay";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    outputFileTypes: string[];
    filteredImageFiles: any;
    setFilteredImageFiles: React.Dispatch<React.SetStateAction<any>>;
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
                    setIsFileRejected={setIsFileRejected}
                    onFilterFiles={onFilterFiles}
                    setIsFileListActive={setIsFileListActive}
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
            <div className="bottom | flex flex-col justify-end"></div>
        </div>
    );
};

export default LeftSidebar;
