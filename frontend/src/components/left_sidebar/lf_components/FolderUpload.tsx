import * as React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import { useDropzone, FileWithPath } from "react-dropzone";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { UserFile } from "../../../interfaces/UserFile";

interface Props {
  files: UserFile[];
  setFiles: React.Dispatch<React.SetStateAction<UserFile[]>>;
}

const FolderUpload = ({ files, setFiles }: Props) => {
  //   const [files, setFiles]: [files: any[], setFiles: any] = React.useState([]);

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
      console.log(files);
    },
  });

  const images = files.map(
    (file: {
      name: React.Key | null | undefined;
      preview: string | undefined;
    }) => (
      <div key={file.name}>
        <img src={file.preview} className="image | w-full h-20 my-1" alt="" />
      </div>
    )
  );

  return (
    <Container>
      <Container
        {...getRootProps()}
        className="dropzone | flex flex-col items-center bg-white h-20 m-1"
      >
        <input
          {...getInputProps()}
          className="folder-upload | w-full"
          // type="file"
          // // webkitdirectory=""
          // directory=""
          // multiple
        />
      </Container>
      <div className="images | m-1">{images}</div>
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
