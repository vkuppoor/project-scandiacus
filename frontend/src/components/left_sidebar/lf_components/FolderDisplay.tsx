import React from "react";

interface Props {
    rejectedFiles: any;
    isFileRejected: boolean;
    filteredImageFiles: any;
    filteredOutputFiles: any;
}

const FolderDisplay = ({
    rejectedFiles,
    isFileRejected,
    filteredImageFiles,
    filteredOutputFiles,
}: Props) => {
    let rejectedFilesDOM: any;
    console.log("rejectedFiles FolderDisplay.tsx", rejectedFiles);
    // if (isFileRejected === true) {
    //     rejectedFilesDOM = rejectedFiles.map((item: any, index: number) => {
    //         console.log("rejected file names", item.file.name);
    //         console.log("rejected file index", index);
    //         <div className="" key={index}>
    //             <span>{item.file.name}</span>;
    //         </div>;
    //     });
    // }
    // <span className="reject-message | text-center">
    //     Some file(s) were rejected
    // </span>

    console.log("FolderDisplay FilteredImageFiles", filteredImageFiles);

    return (
        <div className="folder-upload | flex flex-col justify-center items-center">
            {/* isFileRejected ? (
                rejectedFiles.map((item: any, index: number) => (
                    console.log("rejected file names", item.file.name);
                    console.log("rejected file index", index);
                    <div className="" key={index}>
                        <span>{item.file.name}</span>;
                    </div>;
                ))
            ) */}
            {isFileRejected ? (
                <div className="rejected-files">
                    {rejectedFiles.map((item: any, index: number) => (
                        <div key={index} className="drop-file-preview__item">
                            <div className="drop-file-preview__item__info">
                                <p>{item.file.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
            <div className="console-log"></div>
            {/* <div className="accepted-files">
                {filteredImageFiles.map((item: any, index: number) => (
                    <div key={index} className="drop-file-preview__item">
                        <div className="drop-file-preview__item__info">
                            <p>{item.file.name}</p>
                        </div>
                    </div>
                ))}
            </div> */}
            {/* {rejectedFilesDOM} */}
        </div>
    );
};

export default FolderDisplay;
