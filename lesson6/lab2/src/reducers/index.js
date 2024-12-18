//tạo cái reducer cho các hành động thay đổi trên from

// sử dụng các hằng
import * as types from '../constants'
// Khởi tạo state
const initialState = {
    userName:"Redux--------Demo",
    courseName:"Redux-ReactJS"
}
// tạo reducer
const reducer = (state=initialState,action)=>{
    // Thực hiện cập nhật state theo action
    switch (action.type) {
        case types.CHANGE_USERNAME:
            return{
                ...state, //clone state cũ
                userName:action.payload,// cập nhật lại cái userName
            }
            case types.CHANGE_COURSENAME:
            return{
                ...state, // clone state cũ
                courseName:action.payload,// cập nhật lại cái userName
            }
        default:
            return state;
    }

    // return state;
}
export default reducer;