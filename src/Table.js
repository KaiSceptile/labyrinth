import React from "react";
import Box from "./Box";
import store from "./store/store";
import { decrease, clear} from "./App";
import { useState } from "react";
import PathBuilder from "./pathFinder";
import ModalWindow from "./Modal";

function initArray(){
  let array=[];
  for (let i=0; i<100; i++){
    let smallArray = [];
    for (let j=0; j<100; j++){
      smallArray.push(0);
    }
    array.push(smallArray);
  }
  return array
}


function Table(){
  const [state, setState] = useState(false);
  const [map, setMap] = useState(initArray());
  const [time, setTime] = useState(false);
  //let map = initArray();

  const clearing = () =>{
    setState(false);
    setTime(false);
    clear();
    setMap(initArray());
    //map = ;
    store.dispatch({type: 3})
  }
  const drawRow = (number,row) =>{
    return (<>
    {row.map((elem,index)=>(<Box row={number} column={index} value={elem}></Box>))}
    </>)
    }
  
  const DrawTable=()=>{
    //console.log(map);
  return (
  <div class="table" onClick={decrease}>
  {map.map((elem,index) => drawRow(index,elem))}
  </div>);
  }

  const DrawResultTable=()=>{
  return (
  <>
  <ModalWindow time={time}></ModalWindow>
  <div class="table" onClick={clearing}>
  {map.map((elem,index) => drawRow(index,elem))}
  </div>
  </>);
  }

  const calculate = ()=>{
    if (!state){
    let currentMap=store.getState().table.slice(0);
    let time= Date.now();
    console.log(time)
    let calc= new PathBuilder(store.getState().table,store.getState().from,store.getState().to);
    let path=calc.restorePath();
    time= Date.now() - time;
    if (path!=false) {
    for (let elem of path) {
      currentMap[elem.row][elem.col]='/';
    }
    setState(true);
    setMap(currentMap);
    setTime(time);
    //alert("Spent time to built - "+time+" ms")
  }
}
  }

  return(
  <>
  {!state && <DrawTable/>}
  {state && <DrawResultTable/>}
  <div class="button-panel">
  <button id="clear" onClick={clearing}>Clear</button>
  <button id="calculate" onClick={calculate}>Calculate..</button>
  </div>
  </>
  )
}


export default Table
export {initArray}