import { createStore } from "redux";
import reducer from "./reducer";
import { initArray } from "../Table";

const store = createStore(reducer, { table: initArray(), startFinishPointAmount:2 });

export default store;