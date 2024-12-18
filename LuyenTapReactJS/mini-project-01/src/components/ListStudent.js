import React, { Component } from "react";
import Student from "./Student";

export default class ListStudent extends Component {
  handleToggle = (toggle, action, student) => {
    this.props.onToggle(toggle, action, student);
  };

  handleDelete = (student) => {
    this.props.onDelete(student);
  }


  render() {
    let { renderStudent } = this.props;
    console.log("renderStudent", renderStudent);


    let elementStudent = renderStudent.map((item, index) => {
      return (
        <Student
          key={index}
          renderStudent={item}
          stt={index + 1}
          onToggle={this.handleToggle}
          onDelete={this.handleDelete}
        />
      );
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Number#</th>
                <th>StudentID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>BirthDate</th>
                <th>BirthPlace</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{elementStudent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
