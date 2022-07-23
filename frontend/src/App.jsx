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
        <div className="component-col">
          <FileManager />
        </div>
        <div className="component-col"></div>
        <div className="component-col"></div>
      </div>
    );
  }
}

export default App;
