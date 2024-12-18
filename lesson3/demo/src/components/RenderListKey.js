import React from 'react'

export default function RenderListKey() {
  const number =[1,2,3,4,5];
  const elementNumber = number.map((num)=>{
    return <span>{num*num} ;</span>
  })
  // tạo mảng đối tượng
  const students =[
    {id:"100", name:"Xin chào", age:20},
    {id:"200", name:"Phương", age:20},
    {id:"300", name:"Linh", age:20},
    {id:"400", name:"Cós", age:20},
    {id:"500", name:"Quốc", age:20},
  ]
  const elementStudent = students.map((item,index)=>{
    return(
      <tr key={index}>
          <td>{index+1}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>
            <button>Xem</button>
            <button>Sửa</button>
            <button>Xoá</button>
          </td>
      </tr>
    )
  })
  return (
    <div>
    <hr />
    <h2>
      Render dữ liệu từ mảng, đối tượng...
    </h2>
    <div>{elementNumber}</div>
    <table border={"1px solid black"} cellPadding={"10px"} align='center'>
      <tr>
        <thead>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Họ Tên</th>
          <th>Tuổi</th>
          <th>Chức Năng</th>
        </thead>
        <tbody>
           {elementStudent}
        </tbody>
      </tr>
    </table></div>
  )
}
