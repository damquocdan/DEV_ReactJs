import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorageName";


// chưa mua hàng
 let initialState=[];
 // Đã mua hàng --> get localStorage
 const shoppingCartlocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
 initialState =(shoppingCartlocal !=null && shoppingCartlocal.length>=0)?
    shoppingCartlocal:[];
 // Hàm kiểm tra xem trong giỏ hàng đã có sản phảm chưa
 const getIndexByProduct=(list,product)=>{
    for (let index = 0; index <list.length; index++) {
         if(list[index].product.productID===product.productID){
            return index;
         }
        
    }

    // Nếu không tìm thấy tức là sản phẩm chưa tồn tại trong giỏ hàng
    return -1;
 }
 // tạo reducer -> cart
 const cart=(state=initialState,action)=>{
    // lấy sản phẩm , số lượng từ action
    let {product,quantity}=action;
    let item ={product,quantity};
    let index =-1;
    switch (action.type){
        case BUY_ITEM:
            
            if(state.length ===0){
                // khách hàng chưa mua hàng -- rỏ hàng của khách chưa có sản phẩm 
            // -> push vào rỏ hàng
               state.push(item);
            }else{
                // khách hàng đã mua hàng -- giỏ hàng của khách đã tồn tại
                index = getIndexByProduct(state,product);
                if(index>=0){
                // nếu sản phẩm đã có trong giỏ hàng => tăng số lượng 
                state[index].quantity = parseInt(state[index].quantity)+parseInt(quantity);
                }else{
                // nếu sản phẩm chưa có trong giỏ hàng ==> thêm sản phẩm vào giỏ hàng
                state.push(item);
                }
            }
            // Cập nhật localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        // cập nhật giỏ hàng
        case UPDATE_ITEM:
            // Tìm kiếm sẩn phẩm trong giỏ hàng để cập nhật
            index = getIndexByProduct(state,product);
            if(index>=0){
                state[index].quantity=parseInt(item.quantity);
            }
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return[...state];
        // xoá sản phẩm trong giỏ hàng 
        case REMOVE_ITEM:
            // tìm kiếm sản phẩm cần xoá
            index = getIndexByProduct(state,product)
            if(index>=0){
                state.splice(index,1);
            }
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return[... state];
        default:
           return state;
        
    }

 }
 export default cart;