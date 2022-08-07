import React from "react";
import { Container } from "reactstrap";

import { UserFile } from "../../App";

interface Props {
  files: UserFile[];
  setFiles: React.Dispatch<React.SetStateAction<UserFile[]>>;
}
const MainPanel = ({ files, setFiles }: Props) => {
  const images = files.map(
    (file: {
      name: React.Key | null | undefined;
      preview: string | undefined;
    }) => (
      <div key={file.name}>
        <img src={file.preview} className="image | w-full my-1" alt="" />
      </div>
    )
  );

  return (
    <Container className="main-panel | flex flex-col ">
      <div className="images | m-1">{images}</div>
    </Container>
  );
};

export default MainPanel;
