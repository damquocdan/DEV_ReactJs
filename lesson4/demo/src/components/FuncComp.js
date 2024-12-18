import React from 'react'

export default function FuncComp() {
    //mock data
    const students =[
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ];
    let elementStudent = students.map((student,index)=>{
        <tr>
            <th scope="now">{index+1}</th>
            <td>{student.studentId}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        
    })
  return (
    
    <>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">studentId</th>
      <th scope="col">studentName</th>
      <th scope="col">age </th>
      <th scope="col">Sex</th>
      <th scope="col">birthDate</th>
      <th scope="col">birthPlace</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    {elementStudent}
  </tbody>
</table>
    </>
  )
}
