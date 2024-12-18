import * as types from '../constants/actionType';

export const act_list_student = () => {
    return {
        type: types.LIST_STUDENT
    };
};

// Action cho chức năng thêm sinh viên
export const act_add_student = (actionName, student) => {
    return {
        type: types.ADD_STUDENT,
        actionName,
        student
    };
};

// Action cho chức năng xem sinh viên
export const act_show_student = (actionName ,student) => {
    return {
        type: types.EDIT_STUDENT,
        actionName,
        student
    };
};

// Action cho chức năng sửa sinh viên
export const act_edit_student = (actionName ,student) => {
    return {
        type: types.EDIT_STUDENT,
        actionName,
        student
    };
};

// Action cho chức năng xóa sinh viên
export const act_delete_student = (student) => {
    return {
        type: types.DELETE_STUDENT,
        student
    }
};

// Action cho chức năng thay đổi tên nút thêm hay xem, sửa
export const act_change_button = (actionName) => {
    return {
        type: types.ACTION_NAME,
        actionName
    }
}