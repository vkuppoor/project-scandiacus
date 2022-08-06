import * as React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import { useDropzone, FileWithPath } from "react-dropzone";

const FolderUpload = () => {
  const [files, setFiles] = React.useState();

  const { getRootProps, getInputProps } = useDropzone({
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
  });

  // const files = acceptedFiles.map(file => (
  //     <li key={file.path}>
  //         {file.path} - {file.size} bytes
  //     </li>
  // ));

  return (
    <Container className="dropzone | flex flex-col items-center bg-white">
      <input
        className="folder-upload | w-full"
        type="file"
        // webkitdirectory=""
        directory=""
        multiple
      />
    </Container>
  );
};

export default FolderUpload;

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    // webkitdirectory?:string;
  }
}
