import React from "react";
import { Container } from "reactstrap";

// import { UserFile } from "../../App";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
}
const MainPanel = ({ files, setFiles, imageFileTypes }: Props) => {
    // const filteredFiles = files.filter(
    //     (file: any) => file.path.indexOf(".txt") !== -1
    // );

    const filterFiles = (f: any, fTypes: string[]) => {
        const filteredFiles = f.filter((file: any) => {
            return fTypes.find((element) => {
                return file.path.indexOf(element) !== -1;
            });
        });
        console.log("filtered files", filteredFiles);
        console.log("imageFileTypes", fTypes);
        console.log("f", f);
        return filteredFiles;
    };

    const filteredImageFiles = filterFiles(files, imageFileTypes);

    console.log("filteredImageFiles", filteredImageFiles);

    const images = filteredImageFiles.map(
        (file: any) => (
            <div key={file.name}>
                <img
                    src={file.preview}
                    className="image | w-full my-1"
                    alt=""
                />
                <p>{file.path}</p>
            </div>
        )
        // (file: {
        //     name: React.Key | null | undefined;
        //     preview: string | undefined;
        // }) => (
        //     <div key={file.name}>
        //         <img
        //             src={file.preview}
        //             className="image | w-full my-1"
        //             alt=""
        //         />
        //         <p>{file.path}</p>
        //     </div>
        // )
    );

    console.log("files", files);

    return (
        <Container className="main-panel | flex flex-col ">
            <div className="images | m-1">{images}</div>
        </Container>
    );
};

export default MainPanel;
