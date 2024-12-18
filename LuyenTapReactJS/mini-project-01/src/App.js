import React, { Component } from "react";
import Control from "./components/Control";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";

class App extends Component {
  constructor(props) {
    super(props);
    let arrStudents = [
      {
        studentId: "SV001",
        studentName: "Bùi Minh Thành",
        age: 21,
        sex: true,
        birthDate: "2001-06-11",
        birthPlace: "HN",
        address: "25, Vũ Ngọc Phan",
      },
      {
        studentId: "SV002",
        studentName: "Nguyễn Văn B",
        age: 20,
        sex: false,
        birthDate: "2001-09-09",
        birthPlace: "ĐN",
        address: "1, Ngô Quyền",
      },
      {
        studentId: "SV003",
        studentName: "Nguyễn Văn C",
        age: 19,
        sex: true,
        birthDate: "2003-07-07",
        birthPlace: "HCM",
        address: "1, Lý Tự Trọng",
      },
      {
        studentId: "SV004",
        studentName: "Nguyễn Văn D",
        age: 29,
        sex: false,
        birthDate: "2005-07-07",
        birthPlace: "HCM",
        address: "1, Lý Tự Trọng",
      },
    ];

    // Kiểm tra trong localStorage có dữ liệu hay không
    let list = [];
    if (localStorage.getItem("ListStudent") != null) {
      list = JSON.parse(localStorage.getItem("ListStudent"));
    } else {
      list = arrStudents;
      localStorage.setItem("ListStudent", JSON.stringify(arrStudents));
    }

    this.state = {
      students: list,
      isToggle: false,
      actionName: null,
      student: {},
      searchData: "",
      orderDir: '',
      orderBy: '' ,
    };
  }

  showStudent = "Xem";
  editStudent = "Sửa";
  addStudent = "Thêm mới";

  handleToggle = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    });
  };

  // Xử lý sự kiện onSubmit form
  handleSubmid = (actionName, studentAdd, studentEdit) => {
    let { students } = this.state;
    if (actionName === this.editStudent) {
      students.forEach((item, index) => {
        if (item.studentId === studentEdit.studentId) {
          students[index] = studentEdit;
        }
      });
      this.setState({
        students: students,
      });

      // Khi thêm mới
    } else if (actionName === this.addStudent) {
      students.push(studentAdd);
      this.setState({
        students: students,
      });
    }

    // Cập nhật localStorage
    localStorage.setItem("ListStudent", JSON.stringify(students));
  };

  // Xử lý xóa dữ liệu
  handleDelete = (student) => {
    let { students } = this.state;
    students = students.filter((x) => x.studentId != student.studentId);
    this.setState({
      students: students,
    });

    // Cập nhật localStorage
    localStorage.setItem("ListStudent", JSON.stringify(students));
  };

  // Xử lý tìm kiếm
  handleSearch = (keyword) => {
    this.setState({
      searchData: keyword,
    });
  };

  handleChangeSort = (orderDirParam, orderByParam) => {
    this.setState({
      orderDir: orderDirParam,
      orderBy: orderByParam
    })
  }

  render() {
    let { students } = this.state;
    let { student } = this.state;
    let elementForm = this.state.isToggle ? (
      <Form
        {...this.state}
        renderStudent={student}
        onSubmit={this.handleSubmid}
        onToggle={this.handleToggle}
      />
    ) : null;

    //  xử lý tìm kiếm
    if (this.state.searchData !== "") {
      students = students.filter((x) =>
        x.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())
      );
    }


    //Sap xep du lieu
    if (this.state.orderDir === 'StudentName') {
      if (this.state.orderBy === 'ASC') {
        students.sort((a, b) => ((a.studentName > b.studentName) ? 1 : (a.studentName > b.studentName) ? -1 : 0));
      } else {
        students.sort((a, b) => ((a.studentName > b.studentName) ? -1 : (a.studentName > b.studentName) ? 1 : 0));
      }
    } else {
      if (this.state.orderBy === 'ASC') {
        //Sap xep tuoi tang dan
        students.sort((a, b) => a.age - b.age);
      } else {
        //Sap xep tuoi giam dan
        students.sort((a, b) => b.age - a.age);
      }
    }

    console.log("elementForm", { ...this.state });
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* Start Control */}
            <Control
              onToggle={this.handleToggle}
              onSearch={this.handleSearch}
              onSort={this.handleChangeSort}
            />
            {/* End Control */}
            {/* Start ListSinhVien */}
            <ListStudent
              renderStudent={students}
              onToggle={this.handleToggle}
              onDelete={this.handleDelete}
            />
            {/* End ListSinhVien */}
          </div>
        </div>
        <div className="col-5 grid-margin">{elementForm}</div>
      </div>
    );
  }
}

export default App;
