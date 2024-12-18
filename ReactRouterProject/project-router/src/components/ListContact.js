import React,{useState,useEffect} from 'react'
import axiosUser from '../api/comments'
import {useNavigate}from 'react-router-dom'

function ListContact() {
    const [listUsers,setListUsers]=useState([]);
    // gọi api để lấy dữ liệu về -GET
    useEffect(()=>{
        getAllUsers();
    },[])
    const getAllUsers=async()=>{
        const resp= await axiosUser.get("comments");
        console.log(resp)
        console.log(resp.data)
        setListUsers(resp.data)
    }
    // edit\
    const navigator=useNavigate()
    const handleEdit =(user)=>{
        // lưu dữ liệu vào localStorage
        localStorage.setItem("id",user.id)
        localStorage.setItem("name",user.name)
        localStorage.setItem("tel",user.tel)
        localStorage.setItem("email",user.email)
        localStorage.setItem("address",user.address)
        localStorage.setItem("comments",user.comments)
        // chuyển sang component update
        navigator("/update-contact")
    }
    const handleDelete =async(id)=>{
        await axiosUser.delete("comments/"+id);
        getAllUsers();
    }
    const elementUsers = listUsers.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.tel}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.comments}</td>
                <td>
                    <button onClick={()=>handleEdit(item)}>Sửa</button>
                    <button onClick={()=>handleDelete(item.id)}>Xoá</button>
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách người dùng (comments)</h2>
        <table border={'1px'} width="800px" align='center'>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>PassWord</th>
                    <th>Status </th>
                    <th>Action</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {elementUsers}
            </tbody>
        </table>
    </div>
  )
}

export default ListContact