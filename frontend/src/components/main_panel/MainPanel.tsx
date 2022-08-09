import React from "react";
import { Container } from "reactstrap";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    filteredImageFiles: any;
}
const MainPanel = ({
    files,
    setFiles,
    imageFileTypes,
    filteredImageFiles,
}: Props) => {
    const images = filteredImageFiles.map((file: any) => (
        <div key={file.name}>
            <img src={file.preview} className="image | w-full my-1" alt="" />
            <p>{file.path}</p>
        </div>
    ));

    return (
        <Container className="main-panel | flex flex-col ">
            <div className="images | m-1">{images}</div>
        </Container>
    );
};

export default MainPanel;
