import React from "react";
import ControlPanel from "./control-panel/control-panel";
import InfoPanel from "./info-panel/info-panel";


function App(props) {

  
    return (
      <div className="App">
        <ControlPanel state = {props.state}/>
        <InfoPanel state = {props.state}/>
      </div>
      );
  
  
}

export default App;
