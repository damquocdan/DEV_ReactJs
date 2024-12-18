import React from 'react'
import { connect } from 'react-redux';
import { act_add_student } from '../Redux/actions';

function Control({ addStudent }) {
    const handleAddStudent = () => {
        addStudent(true, student);
    };

    return (
        <div>
            <div className="card-header">
                <div className="row">
                    <div className="col-3 ">
                        <button type="button"
                            className="btn btn-primary btn-icon-text"
                            onClick={handleAddStudent}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6 ">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                            <button className="btn btn-primary btn-icon-text">
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = () => {
//     return {

//     };
// };

const mapDispatchToProps = (dispatchEvent) => {
    return {
        addStudent: (action, student) => {
            dispatchEvent(act_add_student(action, student));
        }
    };
};

export default connect(null, mapDispatchToProps)(Control)