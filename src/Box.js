import React from "react";
import { fromTo } from "./App";
import store from "./store/store";
import styles from "./box-style";
import reducer from "./store/reducer";

function styleInit(value){
  switch (value){
    case 0: return styles.free;
    case '*': return styles.start; 
    case -2: return styles.wall;
    case '/': return styles.path;
  }
}

function Box(props){
  const [state, setState] = React.useState(props.value);
  const [style, setStyle] = React.useState(styleInit(state));
  const addWall =()=>{
    if (state!=='*') {
    setState(-2);
    setStyle(styles.wall);
    store.dispatch({type: 1, row:props.row, column:props.column, value: -2})}
  }
  const addEntryExit = ()=>{
    setState('*');
    setStyle(styles.start);
    store.dispatch({type: 2, row:props.row, column:props.column, value: '*'})
  }
  const click = ()=>{
    return (fromTo>0)? addEntryExit() : addWall();
  }
  return(<div class="box" style={style} onClick={click}></div>)
}

Box.prototype.getType = function (type){
  return this.state;
}

export default Box