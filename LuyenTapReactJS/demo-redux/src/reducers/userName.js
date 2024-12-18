import * as types from "../constants/index";

// Tạo reducer từ action và state 
// input: old state và action 
// output: return new state 

const initialState = "Chung Trịnh Văn";

const userName = (state = initialState, action) => {
    // Thực hiện cập nhật state 
    switch (action.type) {
        case types.CHANGE_USERNAME:
            state = action.userNameNew;
            return state;
        
        default:
            return state;
    }
};

export default userName;