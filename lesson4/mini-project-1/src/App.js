import React, { Component } from 'react'
import Control from './components/Control'
import ListStudent from './components/ListStudent'
import Form from './components/Form'

export default class
  extends Component {
  constructor(props) {
    super(props);
    //mock data
    let arrStudents = [
      { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
      { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
      { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
    ];
    // ktra trong localstorage; nếu có thì khởi tạo trong localStorage
    let list = [];
    if (localStorage.getItem("ListStudent") !== null) {
      list = JSON.parse(localStorage.getItem("ListStudent"));
    } else {
      list = arrStudents;
      localStorage.setItem("ListStudent", JSON.stringify(arrStudents));
    }

    this.state = {
      students: list,
      isToggle: false,
      actionName: '',
      student: {},
      searchData: '',
    }
  }
  // xử lý ẩn hiện form
  handleToggle = (toggle, actionName) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
    })
  }
  //xử lý sk xem thông tin
  handleView = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    })
  }
  // xử lý sự kiện sửa thông tin
  handleEdit = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    })
  }
  // xử lý khi submit form
  handleSubmit = (actionName, student) => {
    let { students } = this.state;
    if (actionName === "Update") {
      for (let i = 0; i < students.length; i++) {
        if (students[i].studentId === student.studentId) {
          students[i] = student;
          break;
        }
      }
      this.setState({
        students: students
      })
    } else if (actionName === "Save") {
      students.push(student);
      this.setState({
        students: students
      })
    }
    localStorage.setItem("ListStudent", JSON.stringify(students));
  }
  handleDelete = (student) => {
    let { students } = this.state;
    // let indexDelete=-1;
    // students.forEach((item,index)=>{
    //   if(item.studentId===student.studentId){
    //     indexDelete=index;
    //   }
    // })
    // students.splice(indexDelete,1);
    students = students.filter(x => x.studentId != student.studentId);
    this.setState({
      students: students
    })
    //cập nhật localStorage
    localStorage.setItem("ListStudent",JSON.stringify(students));
  }
  handleSearch = (keyword)=>{
    this.setState({
      searchData:keyword,
    })
  }

  render() {
    let { students, student } = this.state;
    let { actionName } = this.state;
    let elementForm = this.state.isToggle ? 
    <Form renderActionName={actionName}
      renderStudent={student}
      onToggle={this.handleToggle}
      onSubmit={this.handleSubmit} /> : "";
    // xử lý tìm kiếm
    if(this.state.searchData !==''){
      students = students.filter((x)=>x.studentName.toLowerCase().includes(this.state.searchData.toLowerCase()));
    }

    return (
      <>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* Control */}
              <Control 
              onToggle={this.handleToggle} 
              onSearch={this.handleSearch}
              />

              <ListStudent renderStudents={students}
                onView={this.handleView}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete} />

            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* <Form/> */}
            {elementForm}
          </div>
        </div>

      </>
    )
  }
}
