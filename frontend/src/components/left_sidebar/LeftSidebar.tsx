import React from "react";
import { Container } from "reactstrap";

import FolderUpload from "./lf_components/FolderUpload";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    outputFileTypes: string[];
    setFilteredImageFiles: React.Dispatch<React.SetStateAction<any>>;
    setFilteredOutputFiles: React.Dispatch<React.SetStateAction<any>>;
    onFilterFiles: any;
}

const LeftSidebar = ({
    files,
    setFiles,
    imageFileTypes,
    outputFileTypes,
    setFilteredImageFiles,
    setFilteredOutputFiles,
    onFilterFiles,
}: Props) => {
    const [rejectedFiles, setRejectedFiles] = React.useState<any>([]);

    const [isFileRejected, setIsFileRejected] = React.useState<boolean>(false);

    return (
        <Container className="left-sidebar | flex flex-col">
            <Container className="top | flex flex-col justify-around">
                <FolderUpload
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                    outputFileTypes={outputFileTypes}
                    setFilteredImageFiles={setFilteredImageFiles}
                    setFilteredOutputFiles={setFilteredOutputFiles}
                    rejectedFiles={rejectedFiles}
                    setRejectedFiles={setRejectedFiles}
                    isFileRejected={isFileRejected}
                    setIsFileRejected={setIsFileRejected}
                    onFilterFiles={onFilterFiles}
                />
            </Container>
            <Container className="bottom | flex flex-col justify-end"></Container>
        </Container>
    );
};

export default LeftSidebar;
