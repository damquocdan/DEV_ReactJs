import React from 'react'

function Student({renderStudents, stt}) {
    return (
        <>
            <tr>
                <td>{stt}</td>
                <td>{renderStudents.studentId}</td>
                <td>{renderStudents.studentName}</td>
                <td>{renderStudents.age}</td>
                <td>{renderStudents.sex ? "Nam" : "Nữ"}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                           
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Student