import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";

import FolderUpload from "./lf_components/FolderUpload";
// import { UserFileTypes } from "../../App";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
}

const LeftSidebar = ({ files, setFiles, imageFileTypes }: Props) => {
    return (
        <Container className="left-sidebar | flex flex-col">
            <Container className="top | flex flex-col justify-around">
                <FolderUpload
                    files={files}
                    setFiles={setFiles}
                    imageFileTypes={imageFileTypes}
                />
            </Container>
            <Container className="bottom | flex flex-col justify-end"></Container>
        </Container>
    );
};

export default LeftSidebar;
