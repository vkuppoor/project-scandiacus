import React from "react";
import { DocumentRemoveIcon, PhotographIcon } from "@heroicons/react/outline";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/solid";

interface Props {
    rejectedFiles: any;
    isFileRejected: boolean;
    setIsFileRejected: React.Dispatch<React.SetStateAction<boolean>>;
    filteredImageFiles: any;
    filteredOutputFiles: any;
    setRejectedFiles: React.Dispatch<React.SetStateAction<any>>;
    isFileListActive: boolean;
    setIsFileListActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const FolderDisplay = ({
    rejectedFiles,
    isFileRejected,
    setIsFileRejected,
    filteredImageFiles,
    filteredOutputFiles,
    setRejectedFiles,
    isFileListActive,
    setIsFileListActive,
}: Props) => {
    const [isRejectListActive, setIsRejectListActive] =
        React.useState<boolean>(false);

    const handleMinimizeRejectList = () => {
        setIsRejectListActive(!isRejectListActive);
    };

    const handleMinimizeFileList = () => {
        setIsFileListActive(!isFileListActive);
    };

    const handleDeleteRejectList = () => {
        setRejectedFiles([]);
        setIsFileRejected(false);
    };

    return (
        <div className="folder-display | flex flex-col justify-center items-center">
            {isFileRejected ? (
                <div
                    className="rejected-files
                        | flex flex-col
                        | bg-white w-4/5 m-2 p-2 rounded"
                >
                    <div
                        className="rejected-file-options
                        | flex justify-between items-center
                        | m-1 px-1"
                    >
                        <div className="rejected-file-title">
                            Rejected Files
                        </div>
                        <div className="reject-buttons | flex gap-x-1">
                            <button className="collapse | bg-slate-400 rounded p-1">
                                {isRejectListActive ? (
                                    <MinusIcon
                                        className="minus-icon | w-6 text-white"
                                        onClick={handleMinimizeRejectList}
                                    />
                                ) : (
                                    <PlusIcon
                                        className="minus-icon | w-6 text-white"
                                        onClick={handleMinimizeRejectList}
                                    />
                                )}
                            </button>
                            <button className="delete | bg-red-400 rounded p-1">
                                <TrashIcon
                                    className="trash-icon | w-6 text-white"
                                    onClick={handleDeleteRejectList}
                                />
                            </button>
                        </div>
                    </div>
                    {isRejectListActive ? (
                        <div className="reject-list-container | h-56 overflow-scroll">
                            {rejectedFiles.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="rejected-file-container
                                        | flex justify-start items-center
                                        | bg-slate-100 m-1 p-2 rounded"
                                >
                                    <DocumentRemoveIcon className="rejected-file-icon | w-8 h-8 mr-2 text-red-400" />
                                    <div className="rejected-file-name">
                                        {item.file.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : null}
            <div
                className="file-list
                        | flex flex-col
                        | bg-white w-4/5 m-2 p-2 rounded"
            >
                <div
                    className="file-options
                        | flex justify-between items-center
                        | m-1 px-1"
                >
                    <div className="file-list-title">File List</div>
                    {filteredImageFiles.length !== 0 ? (
                        <button className="collapse | bg-slate-400 rounded p-1">
                            {isFileListActive ? (
                                <MinusIcon
                                    className="minus-icon | w-6 text-white"
                                    onClick={handleMinimizeFileList}
                                />
                            ) : (
                                <PlusIcon
                                    className="minus-icon | w-6 text-white"
                                    onClick={handleMinimizeFileList}
                                />
                            )}
                        </button>
                    ) : null}
                </div>
                {filteredImageFiles.length !== 0 && isFileListActive ? (
                    <div className="file-list-container | h-56 overflow-scroll">
                        {filteredImageFiles.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="file-list-item-container
                                | flex justify-start items-center
                                | bg-slate-100 m-1 p-2 rounded"
                            >
                                <PhotographIcon className="rejected-file-icon | w-8 h-8 min-w-8 min-h-8 mr-2 text-slate-400" />
                                <div className="rejected-file-name">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            {/* {rejectedFilesDOM} */}
        </div>
    );
};

export default FolderDisplay;
