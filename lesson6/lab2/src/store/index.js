// tạo kho dữ liệu (lưu trữ trạn thái dữ liệu của ứng dụng)
import {createStore} from 'redux'
// tạo store từ reducer
import reducer from '../reducers'
// tạo store
export const store = createStore(reducer);