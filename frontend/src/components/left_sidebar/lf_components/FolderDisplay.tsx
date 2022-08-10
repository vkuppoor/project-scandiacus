import React from "react";
import { DocumentRemoveIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";

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
        <div className="folder-display | flex flex-col justify-center items-center">
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
                <div
                    className="rejected-files
                        | flex flex-col
                        | bg-white h-56 w-4/5 m-2 p-2 rounded overflow-scroll"
                >
                    <div
                        className="rejected-file-options
                        | flex justify-between items-center
                        | m-1 px-1"
                    >
                        <div className="rejected-file-title">
                            Rejected Files
                        </div>
                        <button className="delete | bg-red-400 rounded p-1">
                            <TrashIcon className="trash-icon | w-6 text-white" />
                        </button>
                    </div>
                    {rejectedFiles.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="rejected-file-container
                                | flex justify-start items-center
                                | bg-slate-100 m-1 p-2 rounded"
                        >
                            <DocumentRemoveIcon className="rejected-file-icon | w-10 mr-2 text-red-400" />
                            <div className="rejected-file-name">
                                {item.file.name}
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
