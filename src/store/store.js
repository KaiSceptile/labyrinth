import { createStore } from "redux";
import reducer from "./reducer";
import { initArray } from "../Table";
const store = createStore(reducer, { table: initArray()});

export default store;