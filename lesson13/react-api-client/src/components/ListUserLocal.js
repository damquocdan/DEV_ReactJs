import React, { useEffect, useState } from 'react'
import axios from '../api/users'
function ListUserLocal() {
    // tạo state lưu trữ dữ liệu cho componennt
    const [listUser, setListUsers] = useState([])
    // hàm lấy dữ liệu từ api local
    const getAllUsers = async () => {
        let response = await axios.get("users")// http://localhost:3001/users
        console.log("object api user:", response);
        console.log("Data api user:", response);
        // cập nhật state
        setListUsers(response.data);
    }
    // cập nhật dữ liệu khi cpmponent được mount
    useEffect(() => {
        getAllUsers();
    }, [])
    return (
        <div>
            <h1> Danh sách</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Mã Giảng Viên</th>
                        <th>Họ Tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Khoa</th>
                        <th>Chuyên Ngành</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listGiangVien.map((item, index) => {
                            return (
                                <tr key={item.maGiangVien}> {/* Thêm key cho mỗi hàng */}
                                    <td>{item.maGiangVien}</td>
                                    <td>{item.hoTen}</td>
                                    <td>{item.email}</td>
                                    <td>{item.soDienThoai}</td>
                                    <td>{item.khoa}</td>
                                    <td>{item.chuyenNganh}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListUserLocal