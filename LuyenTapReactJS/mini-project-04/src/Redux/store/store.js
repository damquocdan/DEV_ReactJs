import { createStore } from "redux";
import reducer from "../reducers";
export const storeApp = createStore(reducer);