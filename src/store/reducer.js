function reducer(state,action){
  switch(action.type){
    case 1: {
      state.table[action.column][action.row]=action.value;
      return state};
    default: return state;
  }
}

export default reducer