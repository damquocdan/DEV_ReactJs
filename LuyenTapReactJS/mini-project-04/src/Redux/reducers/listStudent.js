import { LIST_STUDENT } from "../constants/actionType";
import { listDataStudent } from "../../Data/mockDataStudent";


// cho chức năng xem danh sách sinh viên
const initalState = listDataStudent;

// reducer
export const listStudent = (state = initalState, action) => {
    switch (action.type) {
        case LIST_STUDENT:
            return state;
    
        default:
            return state;
    }
};
