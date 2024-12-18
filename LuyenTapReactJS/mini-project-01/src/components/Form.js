import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: "",
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
  }
  showStudent = "Xem";
  editStudent = "Sửa";
  addStudent = "Thêm mới";

  // Xử lý sự kiện onChange
  // Start
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
    // End

  // Hiển thị dữ liệu khi nhấn nút sửa hoặc xem
  //   Start
  componentDidMount() {
    const { actionName, renderStudent } = this.props;
    if (actionName === this.editStudent || actionName === this.showStudent) {
      this.setState({
        studentId: renderStudent?.studentId || "",
        studentName: renderStudent?.studentName || "",
        age: renderStudent?.age || "",
        sex: renderStudent?.sex || true,
        birthDate: renderStudent?.birthDate || "",
        birthPlace: renderStudent?.birthPlace || "",
        address: renderStudent?.address || "",
      });
    } else if (actionName === this.addStudent) {
      this.setState({
        studentId: "",
        studentName: "",
        age: "",
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  }

  // Hiển thị lại dữ liệu khi nhấn nút sửa hoặc xem
  componentDidUpdate(prevProps) {
    const { actionName, renderStudent } = this.props;
    if (
      actionName !== prevProps.actionName ||
      renderStudent !== prevProps.renderStudent
    ) {
      if (actionName === this.editStudent || actionName === this.showStudent) {
        this.setState({
          studentId: renderStudent.studentId || "",
          studentName: renderStudent.studentName || "",
          age: renderStudent.age || "",
          sex: renderStudent.sex || true,
          birthDate: renderStudent.birthDate || "",
          birthPlace: renderStudent.birthPlace || "",
          address: renderStudent.address || "",
        });
      } else if (actionName === this.addStudent) {
        this.setState({
          studentId: "",
          studentName: "",
          age: "",
          sex: true,
          birthDate: "",
          birthPlace: "",
          address: "",
        });
      }
    }
  }
  // End

  render() {
    let { actionName } = this.props;

    // Xử lý sự kiện handleSubmid
    // Start
    const handleSubmid = (event, actionName) => {
      event.preventDefault();

      // thêm mới (Save)
      if (actionName === this.addStudent) {
        let studentAdd = {
          studentId: this.state.studentId,
          studentName: this.state.studentName,
          age: this.state.age,
          sex: this.state.sex,
          birthDate: this.state.birthDate,
          birthPlace: this.state.birthPlace,
          address: this.state.address,
        };

        // Chuyển obj về app để xử lý
        this.props.onSubmit(actionName, studentAdd, null);
        // Set onToggle = false để ẩn form
        this.props.onToggle(false, actionName);
      } else if (actionName === this.editStudent) {
        let studentEdit = {
          studentId: this.state.studentId,
          studentName: this.state.studentName,
          age: this.state.age,
          sex: this.state.sex,
          birthDate: this.state.birthDate,
          birthPlace: this.state.birthPlace,
          address: this.state.address,
        };

        // Chuyển obj về app để xử lý
        this.props.onSubmit(actionName, null, studentEdit);
        // Set onToggle = false để ẩn form
        this.props.onToggle(false, actionName);
      }
    };
    // End

    // Kiểm tra xem actionName là gì để hiển thị nút submit
    // Start
    let elementBtnSubmit = (
      <button
        type="submit"
        className="btn btn-primary me-2"
        onClick={(event) => handleSubmid(event, actionName)}
      >
        {actionName}
      </button>
    );
    let checkBtnSubmit;
    let checkReadOnlyId = false;
    let checkReadOnly = false;
    if (actionName === this.addStudent) {
      checkBtnSubmit = elementBtnSubmit;
    } else if (actionName === this.editStudent) {
      checkBtnSubmit = elementBtnSubmit;
      checkReadOnlyId = true;
    } else if (actionName === this.showStudent) {
      checkBtnSubmit = null;
      checkReadOnly = true;
    }
    // End

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{actionName} Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={this.state.studentId}
                  onChange={this.handleChange}
                  readOnly={checkReadOnly || checkReadOnlyId}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={this.state.studentName}
                  onChange={this.handleChange}
                  readOnly={checkReadOnly}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  readOnly={checkReadOnly}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="sex"
                  value={this.state.sex}
                  onChange={this.handleChange}
                  disabled={checkReadOnly}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="birthDate"
                  value={this.state.birthDate}
                  onChange={this.handleChange}
                  readOnly={checkReadOnly}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="birthPlace"
                  value={this.state.birthPlace}
                  onChange={this.handleChange}
                  disabled={checkReadOnly}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  name="address"
                  value={this.state.address}
                  readOnly={checkReadOnly}
                />
              </div>
            </div>
            {checkBtnSubmit}
          </form>
        </div>
      </div>
    );
  }
}
