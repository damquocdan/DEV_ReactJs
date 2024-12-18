import * as types from '../constants/actionType';

// action cho chức năng hiển thị thông tin sản phẩm
export const act_list_product = () => {
    return {
        type: types.lIST_PRODUCT
    }
};

// action cho chức năng mua hàng (click nút mua hàng)
export const act_buy_item = (product, quantity) => {
    return {
        type: types.BUY_ITEM,
        product,
        quantity
    };
};

// action cho chức năng cập nhật giỏ hàng
export const act_update_item = (product, quantity) => {
    return {
        type: types.UPDATE_ITEM,
        product,
        quantity
    };
};

// action cho chức năng xoá sản phâm trong giỏ hàng
export const act_delete_item = (product) => {
    return {
        type: types.DELETE_ITEM,
        product
    };
};

// action cho chức năng thông báo 
export const act_change_notify = (notify) => {
    return {
        type: types.CHANGE_NOTIFY,
        notify
    };
};