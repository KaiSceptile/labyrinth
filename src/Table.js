import React from "react";
import Box from "./Box";
import store from "./store/store";
import { decrease, clear} from "./App";
import { useState } from "react";

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
  let map = initArray();

  const clearing = () =>{
    setState(!state);
    clear();
  }
  const drawRow = (number,row) =>{
    return (<>
    {row.map((elem,index)=>(<Box column={index} row={number}></Box>))}
    </>)
    }
  
  const DrawTable=()=>{
  return (
  <div class="table" onClick={decrease}>
  {map.map((elem,index) => drawRow(index,elem))}
  </div>);
  }
  
  const calculate = ()=>{
    //map=store.getState().value;
    console.log(store.getState());
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