import * as React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import { useDropzone, FileWithPath } from "react-dropzone";
import { UploadIcon } from "@heroicons/react/outline";
import { UserFile } from "../../../App";

interface Props {
  files: UserFile[];
  setFiles: React.Dispatch<React.SetStateAction<UserFile[]>>;
}

const FolderUpload = ({ files, setFiles }: Props) => {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
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
        console.log(files);
      },
    });

  return (
    <Container>
      <Container
        {...getRootProps()}
        className="dropzone | flex flex-col justify-center items-center | bg-white h-40 m-2 p-2 rounded | hover:cursor-pointer"
      >
        <input
          {...getInputProps()}
          className="folder-upload | w-full"
          // type="file"
          // // webkitdirectory=""
          // directory=""
          // multiple
        />
        <div className="input-content">
          <div className="upload-icon-div  | flex flex-col items-center">
            <UploadIcon className="upload-icon | text-slate-500 h-2/5 w-2/5" />
          </div>
          //
          https://github.com/lyhd/reactjs/blob/react-drag-drop-dropzone/src/index.js
          fix for isDragActive issue
          {isDragActive ? (
            <div className="dnd-items | flex flex-col items-center">
              <p>Release to drop files here</p>
            </div>
          ) : (
            <div className="dnd-items | flex flex-col items-center">
              <p>Drag & drop files here</p>
              <button className="browse-files | bg-slate-200 rounded p-2">
                Browse files
              </button>
            </div>
          )}
        </div>
      </Container>
    </Container>
  );
};

export default FolderUpload;

// declare module "react" {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     directory?: string;
//     // webkitdirectory?:string;
//   }
// }
