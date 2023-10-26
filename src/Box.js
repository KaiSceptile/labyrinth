import React from "react";
import { fromTo } from "./App";
import store from "./store/store";
import reducer from "./store/reducer";

function Box(props){
  const [state, setState] = React.useState(0);
  const addWall =()=>{
    if (state!==-1) {setState(1);
    store.dispatch({type: 1, row:props.row, column:props.column, value: -2})}
  }
  const addEntryExit = ()=>{
    setState(-1);
    store.dispatch({type: 2, row:props.row, column:props.column, value: '*'})
  }
  const click = ()=>{
    return (fromTo>0)? addEntryExit() : addWall();
  }
  return(<div class="box" onClick={click}>{state}</div>)
}

Box.prototype.getType = function (type){
  return this.state;
}

export default Box