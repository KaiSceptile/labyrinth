import React from "react";
import Box from "./Box";
import store from "./store/store";
import { useState } from "react";
import PathBuilder from "./pathFinder";
import ModalWindow from "./Modal";


function initArray() {
  let array = [];
  for (let i = 0; i < 100; i++) {
    let smallArray = [];
    for (let j = 0; j < 100; j++) {
      smallArray.push(0);
    }
    array.push(smallArray);
  }
  return array;
}

function Table() {
  const [state, setState] = useState(false);
  const [map, setMap] = useState(initArray());
  const [time, setTime] = useState(false);
  const [startFinishPointAmount, setPoints] = useState(2)
  const clearing = () => {
    setState(false);
    setTime(false);
    setPoints(2);
    setMap(initArray());
    store.dispatch({ type: 3 });
  };
  const decrease = () => {
    if (startFinishPointAmount > 0) setPoints(startFinishPointAmount);
  }
  const generateKey = (row,col) => {
    let line='r='+row+'c='+col;
    return line;
  }
  const drawRow = (number, row) => {
    return (
      <div key={'r'+number} className="row">
        {row.map((elem, index) => (
          <Box key={generateKey(number,index)} row={number} column={index} value={elem}></Box>
        ))}
      </div>
    );
  };

  const DrawTable = () => {
    return (
      <div className="table" onClick={decrease}>
        {map.map((elem, index) => drawRow(index, elem))}
      </div>
    );
  };

  const DrawResultTable = () => {
    return (
      <>
        <ModalWindow time={time}></ModalWindow>
        <div className="table" onClick={clearing}>
          {map.map((elem, index) => drawRow(index, elem))}
        </div>
      </>
    );
  };

  const calculate = () => {
    if (!state) {
      let currentMap = store.getState().table.slice(0);
      let time = Date.now();
      let calc = new PathBuilder(
        store.getState().table,
        store.getState().from,
        store.getState().to
      );
      let path = calc.restorePath();
      time = Date.now() - time;
      if (typeof path === typeof map) {
        for (let elem of path) {
          currentMap[elem.row][elem.col] = "/";
        }
        setMap(currentMap);
      }
      if (path) setTime(time);
      setState(true);
    }
  };

  return (
    <>
      {!state && <DrawTable />}
      {state && <DrawResultTable />}
      <div className="button-panel">
        <button id="clear" onClick={clearing}>
          Clear
        </button>
        <button id="calculate" onClick={calculate}>
          Calculate..
        </button>
      </div>
    </>
  );
}

export default Table;
export { initArray};