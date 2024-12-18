import React from 'react'

export default function () {
  const students = [
    { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
    { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
    { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
  ]
  const elementStudent =students.map((item,index)=>{
    return(
      <tr key={index}>
        <td>{index+1}</td>
        <td>{item.studentId}</td>
        <td>{item.studentName}</td>
        <td>{item.age}</td>
        <td>{item.sex ==true? "nam":"nu"}</td>
        <td>{item.birthDate}</td>
        <td>{item.birthPlace}</td>
        <td>{item.address}</td>
      </tr>

    )
  })
  return (
    <div>
      <table border={"1px solid black"} cellPadding={"10px"} align='center'>
      <tr>
        <thead>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Họ Tên</th>
          <th>Tuổi</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Nơi sinh</th>
          <th>Địa chỉ</th>
        </thead>
        <tbody>
           {elementStudent}
        </tbody>
      </tr>
    </table>
    </div>
  )
}
