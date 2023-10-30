import { initArray } from "../Table";

function reducer(state,action){
  switch(action.type){
    case 1: {
      state.table[action.row][action.column]=action.value;
      return state};
    case 2: {
      if (state.from==null) {state.from={column:action.column, row: action.row}}
      else {state.to={column:action.column, row: action.row}};
      console.log(state);
      state.table[action.row][action.column]=action.value;
      return state};
      case 3: {
      state={table:initArray()};
      return state;
      }; break;
    default: return state;
  }
}

export default reducer