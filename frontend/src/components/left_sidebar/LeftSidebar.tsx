import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";

import FolderUpload from "./lf_components/FolderUpload";
// import { UserFileTypes } from "../../App";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    setFilteredImageFiles: React.Dispatch<React.SetStateAction<any>>;
    onFilterFiles: any;
}

const LeftSidebar = ({
    files,
    setFiles,
    imageFileTypes,
    setFilteredImageFiles,
    onFilterFiles,
}: Props) => {
    return (
        <Container className="left-sidebar | flex flex-col">
            <Container className="top | flex flex-col justify-around">
                <FolderUpload
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                    setFilteredImageFiles={setFilteredImageFiles}
                    onFilterFiles={onFilterFiles}
                />
            </Container>
            <Container className="bottom | flex flex-col justify-end"></Container>
        </Container>
    );
};

export default LeftSidebar;
