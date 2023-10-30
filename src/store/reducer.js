import { initArray } from "../Table";

function reducer(state, action) {
  switch (action.type) {
    case 1: {
      state.table[action.row][action.column] = action.value;
      return state;
    }
    case 2: {
      if (state.from == null) {
        state.from = { column: action.column, row: action.row };
        state.startFinishPointAmount-=1;
      } else {
        state.to = { column: action.column, row: action.row };
        state.startFinishPointAmount-=1;
      }
      state.table[action.row][action.column] = action.value;
      return state;
    }
    case 3:
      {
        state = { table: initArray(), startFinishPointAmount:2 };
        return state;
      }
    default:
      return state;
  }
}

export default reducer;
