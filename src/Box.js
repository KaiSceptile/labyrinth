import React from "react";
import { fromTo } from "./App";
function Box(){
  const [state, setState] = React.useState(0);
  const addWall =()=>{
    if (state!==2) setState(1);
  }
  const addEntryExit = ()=>{
    setState(2);
  }
  const click = ()=>{
    return (fromTo>0)? addEntryExit() : addWall();
  }
  return(<div class="box" onClick={click}>{state}</div>)
}


export default Box