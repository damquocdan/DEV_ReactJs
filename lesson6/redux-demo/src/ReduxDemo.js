/* Bài thực hành 1:
// Tạo 1 reducer
const reducer = "Devmaster Academy"
// Hiển thị trên consolog
console.log(reducer);

export default reducer;
*/
/* Bài thực hành 2 : thực hiện thay đổi state với reducer*/
//1. import createStore từ Redux
import {createStore} from 'redux'
//2. Tạo reducer từ state, action
// input old state, action
// output: return new state
//Khởi tạo một state
const inititalState ={
    userName:"Đàm Dân",
    courseName:"Devmaster ReactJS"
}
//tạo một reducer
const reducer = (state=inititalState, action)=>{
    // tiếp nhận action và thực hiện cập nhập state
    // ... chưa làm gì cả)

    // Bắt đầu xử lý
    switch (action.type) {
        case "CHANGE_USER_NAME":
            state.userName = action.payload
            
            break;
        case "CHANGE_COURSE_NAME":
            state.courseName =action.payload
            break;
        default:
            break;
    }
    return state;
}
// 3.tạo một store từ reducer
const store = createStore(reducer)
// lấy dữ liệu trong store
console.log(store);
// lấy dữ liệu từ store thông qua getState
console.log("initialState",store.getState());
// 4. Thực hiện cập nhật state của store thông qua action
// - thực hiện cập nhật state của store (với userName)
const actChangeUserName = ()=>{
    return{
        type:"CHANGE_USER_NAME",
        payload:"Devmaster Academy"
    }
}
//bắn action từ component lên store để thực hiện cập nhật state
store.dispatch(actChangeUserName())
// hiển thị dữ liệu từ state mới 
console.log("Change userName:", store.getState());
// - tạo action thực hiện cập nhật courseName
const actChangoCourseName= (param) =>{
    return{
        type:"CHANGE_COURSE_NAME",
        // data:param
        payload:param
    }
}
//bắn action từ component lên store để thực hiện cập nhật state
store.dispatch(actChangoCourseName("fontend ReactJS Redux"))
// hiển thị dữ liệu mới từ State
console.log("change course Name:",store.getState());
export default reducer;
