import React, { Component } from 'react'
import Student from './Student';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: 0,
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    }
  }
  componentWillUnmount = () => {
    let { renderActionName, renderStudent } = this.props;
    console.log("renderStudent:",renderStudent);
    if (renderActionName === "Close" || renderActionName==="Update") {
      this.setState({
        studentId: renderStudent.studentId,
        studentName: renderStudent.studentId,
        age: renderStudent.age,
        sex: renderStudent.sex,
        birthDate: renderStudent.birthDate,
        birthPlace: renderStudent.birthPlace,
        address: renderStudent.address,
      })
    } else {
      this.setState({
        studentId: "",
        studentName: "",
        age: 0, 
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      })
    }
  }
  componentWillReceiveProps = (nextProps) => {
    let {renderActionName,renderStudent} = nextProps;
    if (renderActionName==="Close" || renderActionName==="Update") {
      this.setState({
        studentId: renderStudent.studentId,
        studentName: renderStudent.studentName,
        age: renderStudent.age,
        sex: renderStudent.sex,
        birthDate: renderStudent.birthDate,
        birthPlace: renderStudent.birthPlace,
        address: renderStudent.address,
      })
    } else {
      this.setState({
        studentId: "",
        studentName: "",
        age: 0,
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      })
    }
  }
  handleChange =(event)=>{
    let name=event.target.name;
    let value = event.target.value;
    this.setState({
      [name]:value,
    })
  }
  handleSubmit = (event, actionName)=>{
    event.preventDefault();
    let student ={
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      age: this.state.age,
      sex: this.state.sex,
      birthDate: this.state.birthDate,
      birthPlace: this.state.birthPlace,
      address: this.state.address,
    }
    this.props.onSubmit(actionName,student);
    this.props.onToggle(false,actionName);
  }
  render() {
    let { renderActionName } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control"
                  value={this.state.studentId}
                  name='studenID'
                  onChange={this.handleChange} />

              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control"
                  value={this.state.studentName}
                  name='studenName'
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control"
                  value={this.state.age}
                  name='age'
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control"
                  value={this.state.birthPlace}
                  name='birthPlace'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control"
                  value={this.state.birthPlace}
                  name='birthPlace'
                  onChange={this.handleChange}>
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"ĐN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control"
                  value={this.state.address}
                  name='address' 
                  onChange={this.handleChange}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2"
            onClick={(event)=>this.handleSubmit(event,renderActionName)}>
              {renderActionName}
            </button>
          </form>
        </div>
      </div>
    )
  }
}
