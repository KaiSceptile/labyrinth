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
    //setState(!state);
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
  
  const calculate = ()=>{
    let calc= new PathBuilder(store.getState().table,store.getState().from,store.getState().to);
    calc.findPath();
    //console.log(calc.array);
    setMap(calc.array);
  }

  return(
  <>
  {!state && <DrawTable/>}
  {state && <DrawTable/>}

  <button id="clear" onClick={clearing}>Clear</button>
  <button id="calculate" onClick={calculate}>Calculate..</button>
  </>
  )
}


export default Table
export {initArray}