import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
  //evnet
  handleView = (toggle,actionName,student)=>{
    this.props.onView(toggle,actionName,student);
  }
  handleEdit = (toggle,actionName,student)=>{
    this.props.onView(toggle,actionName,student);
  }
  handleDelete =(student)=>{
    this.props.onDelete(student);
  }

  render() {
    let {renderStudents} = this.props;
    let elementStudent = renderStudents.map((student,index)=>{
        return(
            <Student key={index} renderStudent={student} stt={index+1}
            onView ={this.handleView}
            onEdit={this.handleEdit} 
            onDelete={this.handleDelete}
            />
        )
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Ngày Sinh</th>
                <th>Địa chỉ</th>
                <th>Thường trú</th>
                <th>Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {elementStudent}
            
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
