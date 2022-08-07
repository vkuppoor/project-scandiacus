import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";

import FolderUpload from "./lf_components/FolderUpload";
import { UserFile } from "../../App";

interface Props {
  files: UserFile[];
  setFiles: React.Dispatch<React.SetStateAction<UserFile[]>>;
}

const LeftSidebar = ({ files, setFiles }: Props) => {
  return (
    <Container className="left-sidebar | flex flex-col">
      <Container className="top | flex flex-col justify-around">
        <FolderUpload files={files} setFiles={setFiles} />
      </Container>
      <Container className="bottom | flex flex-col justify-end"></Container>
    </Container>
  );
};

export default LeftSidebar;
