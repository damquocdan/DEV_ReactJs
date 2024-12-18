import React from 'react'
import Student from './Student'
import { connect } from 'react-redux'

function ListStudent({ listStudents  }) {
    console.log("ListStudent", listStudents);
    let elementStudent = listStudents.map((item, index) => {
        return (
            <Student key={index} renderStudents={item} stt={index + 1}/>
        );
    });
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                           {elementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


// map state to props
const mapStateToProps = (state) => {
    return {
        listStudents: state.listStudent,
    };
};

export default connect(mapStateToProps, null) (ListStudent);