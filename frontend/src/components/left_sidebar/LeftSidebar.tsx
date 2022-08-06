import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";

import FolderUpload from "./lf_components/FolderUpload";

const LeftSidebar = () => {
  return (
    <Container className="file-manager-sidebar | flex flex-col">
      <Container className="top | flex flex-col justify-around">
        <FolderUpload />
      </Container>
      <Container className="bottom | flex flex-col justify-end"></Container>
    </Container>
  );
};

export default LeftSidebar;
