import * as types from '../constants/actionType';

const initalState = {
    students: [],
}

const addStudent = (state = initalState, action) => {
    // Thực hiện cập nhật state 
    switch (action.type) {
        case types.ADD_STUDENT:
            state = action.ADD_STUDENT;
            return state;
        default:
            return state;
    }
};

export default addStudent;