import React, { Component } from 'react'

export default class ClassArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ]
    }
  }

  render() {
    const {students}=this.state;

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
              {students.map((student,index) => (
                <tr key={student.studentId}>
                  <td>{index + 1}</td>
                  <td>{student.studentId}</td>
                  <td>{student.studentName}</td>
                  <td>{student.age}</td>
                  <td>{student.sex ? "nam" : "nu"}</td>
                  <td>{student.birthDate}</td>
                  <td>{student.birthPlace}</td>
                  <td>{student.address}</td>
                </tr>))}
            </tbody>
          </tr>
        </table>
      </div>
    )
  }
}
