import React, { Component } from "react";

export default class Student extends Component {
  handleToggle = (action, student) => {
    this.props.onToggle(true, action, student);
  };

  handleDelete = (student) => {
    this.props.onDelete(student);
  };

  render() {
    let { renderStudent, stt } = this.props;
    console.log("Student", renderStudent);

    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>{renderStudent.sex ? "Nam" : "Nữ"}</td>
          <td>{renderStudent.birthDate}</td>
          <td>{renderStudent.birthPlace}</td>
          <td>{renderStudent.address}</td>

          <td>
            <div className="template-demo">
              <button
                type="button"
                className="btn btn-danger btn-icon-text"
                onClick={() => this.handleToggle("Xem", renderStudent)}
              >
                Xem
              </button>
              <button
                type="button"
                className="btn btn-warning btn-icon-text"
                onClick={() => this.handleToggle("Sửa", renderStudent)}
              >
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text" onClick={() => this.handleDelete(renderStudent)}>
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
