import React, { Component } from "react";
import "./assets/css/app.css";

import FileManager from "./components/FileManager";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() {
    return (
      <div className="main-grid">
        <div className="component-col left-sidebar">
          <FileManager />
        </div>
        <div className="component-col main-panel"></div>
        <div className="component-col right-sidebar"></div>
      </div>
    );
  }
}

export default App;
