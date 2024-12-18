import { combineReducers } from "redux";
import userName from "./userName";
import courseName from "./courseName";

const reducer = combineReducers({
    userName: userName,
    courseName: courseName
});

export default reducer;