// combine reducers
import { combineReducers } from "redux";
import { listStudent } from "./listStudent";
import addStudent from "./addStudent";

const reducer = combineReducers({
    listStudent: listStudent,
    addStudent: addStudent
});

export default reducer;