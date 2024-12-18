import * as types from '../constants/index';

const initialState = "ReactJS";

const courseName = (state = initialState, action) => {
    switch (action.type) {
        // Thực hiện cập nhật state 
        case types.CHANGE_COURSENAME:
            state = action.courseNameNew;
            return state;
        default:
            return state;
    };
};

export default courseName;