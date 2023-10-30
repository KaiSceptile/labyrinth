import React from "react";
import Box from "./Box";
import store from "./store/store";
import { decrease, clear} from "./App";
import { useState } from "react";
import PathBuilder from "./pathFinder";

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
  //let map = initArray();

  const clearing = () =>{
    setState(false);
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
  <div class="table" onClick={clearing}>
  {map.map((elem,index) => drawRow(index,elem))}
  </div>);
  }

  const calculate = ()=>{
    let currentMap=store.getState().table.slice(0);
    console.log(currentMap);
    let calc= new PathBuilder(store.getState().table,store.getState().from,store.getState().to);
    let path=calc.restorePath();
    for (let elem of path) {
      currentMap[elem.row][elem.col]='/';
    }
    setState(true);
    console.log(currentMap);
    setMap(currentMap);
  }

  return(
  <>
  {!state && <DrawTable/>}
  {state && <DrawResultTable/>}

  <button id="clear" onClick={clearing}>Clear</button>
  <button id="calculate" onClick={calculate}>Calculate..</button>
  </>
  )
}


export default Table
export {initArray}