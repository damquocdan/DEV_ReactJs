import * as types from "../constants/index";


export const actChangeUserName = () => {
    return {
        type: types.CHANGE_USERNAME,
        userNameNew: "Bùi Minh Thành"
    };
};

export const actChangeCourseName = () => {
    return {
        type: types.CHANGE_COURSENAME,
        courseNameNew: ".NET Core "
    }
}