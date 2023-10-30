import React from "react";
import store from "./store/store";
import styles from "./box-style";

function styleInit(value) {
  switch (value) {
    case 0:
      return styles.free;
    case "*":
      return styles.start;
    case -2:
      return styles.wall;
    case "/":
      return styles.path;
  }
}

function Box(props) {
  const [state, setState] = React.useState(props.value);
  const [style, setStyle] = React.useState(styleInit(state));
  const addWall = () => {
    if (state !== "*") {
      setState(-2);
      setStyle(styles.wall);
      store.dispatch({
        type: 1,
        row: props.row,
        column: props.column,
        value: -2,
      });
    }
    if (state == "-2") {
      setState(0);
      setStyle(styles.free);
      store.dispatch({
        type: 1,
        row: props.row,
        column: props.column,
        value: 0,
      });
    }
  };
  const addEntryExit = () => {
    setState("*");
    setStyle(styles.start);
    store.dispatch({
      type: 2,
      row: props.row,
      column: props.column,
      value: "*",
    });
  };
  const click = () => {
    return store.getState().startFinishPointAmount > 0 ? addEntryExit() : addWall();
  };

  return (<div className="box" style={style} onClick={click}></div>);
}

export default Box;
