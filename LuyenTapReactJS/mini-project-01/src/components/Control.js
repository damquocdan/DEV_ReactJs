import React, { Component } from "react";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  handleToggle = () => {
    this.props.onToggle(true, "Thêm mới");
  };

  // tìm kiếm
  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.keyword);
  };

  handleChangeSort =(event) => {
    let value = event.target.value;
    let arrSort = value.split("-");
    this.props.onSort(arrSort[0], arrSort[1]);
  }
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={this.handleToggle}
            >
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
                value={this.state.keyword}
                name="keyword"
                onChange={(event) =>
                  this.setState({ keyword: event.target.value })
                }
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={this.handleChangeSort}>
              <option value="StudentName-ASC">Tên SV tăng dần</option>
              <option value="StudentName-DESC">Tên SV giảm dần</option>
              <option value="Age-ASC">Tuổi tăng dần</option>
              <option value="Age-DESC">Tuổi giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
