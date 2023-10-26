import { initArray } from "../Table";

function reducer(state,action){
  switch(action.type){
    case 1: {
      state.table[action.column][action.row]=action.value;
      return state}; break;
    case 2: {
      if (state.from==null) {state.from={column:action.column, row: action.row}}
      else {state.to={column:action.column, row: action.row}};
      state.table[action.column][action.row]=action.value;
      return state}; break;
      case 3: {
      state={tabel:initArray()};
      return state;
      }; break;
    default: return state;
  }
}

export default reducer