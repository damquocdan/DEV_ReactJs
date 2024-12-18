import { createStore } from "redux";
import reducer from "../reducers";

// Tạo store từ reducer
export const store = createStore(reducer);