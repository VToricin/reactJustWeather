import React from "react";
import ControlPanel from "./control-panel/control-panel";
import InfoPanel from "./info-panel/info-panel";
import Waiting from "./info-panel/waiting/waiting"

function App(props) {

  if (props.state.currentCords === '!'){
    console.log('waiting...');
  
    return (<Waiting/>)
  } else {
    return (
      <div className="App">
        <ControlPanel state = {props.state}/>
        <InfoPanel state = {props.state}/>
      </div>
      );
  }
  
}

export default App;
