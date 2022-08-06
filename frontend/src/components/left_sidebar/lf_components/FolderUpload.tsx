import * as React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import { useDropzone, FileWithPath } from "react-dropzone";

const FolderUpload = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // const files = acceptedFiles.map(file => (
  //     <li key={file.path}>
  //         {file.path} - {file.size} bytes
  //     </li>
  // ));

  return (
    <Container className="dropzone | flex flex-col items-center">
      <input
        className="folder-upload | w-full hidden"
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
