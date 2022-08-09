import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "@heroicons/react/outline";

interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    outputFileTypes: string[];
    setFilteredImageFiles: React.Dispatch<React.SetStateAction<any>>;
    setFilteredOutputFiles: React.Dispatch<React.SetStateAction<any>>;
    rejectedFiles: any;
    setRejectedFiles: React.Dispatch<React.SetStateAction<any>>;
    isFileRejected: boolean;
    setIsFileRejected: React.Dispatch<React.SetStateAction<boolean>>;
    onFilterFiles: any;
}

const FolderUpload = ({
    files,
    setFiles,
    imageFileTypes,
    outputFileTypes,
    setFilteredImageFiles,
    setFilteredOutputFiles,
    rejectedFiles,
    setRejectedFiles,
    isFileRejected,
    setIsFileRejected,
    onFilterFiles,
}: Props) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [".jpeg", ".jpg"],
            "image/png": [".png"],
            "image/bmp": [".bmp"],
            "image/tif": [".tif", ".tiff"],
            "image/dng": [".dng"],
            "image/webp": [".webp"],
            "image/mpo": [".mpo"],
            "text/html": [".html", ".htm"],
            "application/json": [".json"],
            "application/xml": [".xml"],
            "text/plain": [".txt"],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
            setFilteredImageFiles(onFilterFiles(acceptedFiles, imageFileTypes));
            setFilteredOutputFiles(
                onFilterFiles(acceptedFiles, outputFileTypes)
            );
        },
        onDropRejected: (fileRejections) => {
            console.log("fileRejections", fileRejections);
            setRejectedFiles(fileRejections);
            setIsFileRejected(true);
        },
    });

    let fileRejectMessage: any;
    if (isFileRejected === true) {
        fileRejectMessage = (
            <span className="reject-message | text-center">
                Some file(s) were rejected
            </span>
        );
    }

    return (
        <Container className="folder-upload | flex flex-col justify-center items-center">
            <Container
                {...getRootProps()}
                className="dropzone | flex flex-col justify-center items-center | bg-white h-40 m-2 p-2 rounded rounded-b-none | hover:cursor-pointer"
            >
                <input
                    {...getInputProps()}
                    className="folder-upload | w-full"
                />
                <div className="input-content">
                    <div className="upload-icon-div  | flex flex-col items-center">
                        <UploadIcon className="upload-icon | text-slate-500 h-10 w-10 m-2" />
                    </div>
                    <div className="dnd-items | flex flex-col items-center">
                        <p className="dnd-message | text-center">
                            Drag & drop files here
                        </p>
                        <button className="browse-files | bg-slate-200 rounded p-2">
                            Browse files
                        </button>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default FolderUpload;
