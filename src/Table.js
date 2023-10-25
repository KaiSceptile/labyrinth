import React from "react";
import Box from "./Box";
import { insideOfTable, decrease, clear} from "./App";
import { useState } from "react";

function Table(){
  const [state, setState] = useState(false);
  const clearing = () =>{
    setState(!state);
    clear();
  }
  return(
  <>
  {!state && (<div class="table" onClick={decrease}>
  {insideOfTable.map(elem=>(<Box></Box>))}
  </div>)}
  {state && (<div class="table" onClick={decrease}>
  {insideOfTable.map(elem=>(<Box></Box>))}
  </div>)}
  <button id="clear" onClick={clearing}>Clear</button>
  </>
  )
}


export default Table