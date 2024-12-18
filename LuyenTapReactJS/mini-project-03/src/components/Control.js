import React, { useState } from 'react'

function Control({ onAddTask, onSearch }) {
  // Quản lý keyword
  const [keyword, setKeyword] = useState("");

  // Chuyển dữ liệu sang app
  const handleSearch = () => {
    console.log("keyword", keyword);
    onSearch(keyword);
  };

  const handleAddTask = () => {
    onAddTask(true, "Save", null);
  };

  return (
    <>
      <div className="row">
        {/* SEARCH : START */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              name="keyword"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-info"
                type="button"
                onClick={handleSearch}
              >
                Go!
              </button>
            </span>
          </div>
        </div>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort by <span className="caret" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a role="button">Name ASC</a>
              </li>
              <li>
                <a role="button">Name DESC</a>
              </li>
              <li role="separator" className="divider" />
              <li>
                <a role="button">Level ASC</a>
              </li>
              <li>
                <a role="button">Level DESC</a>
              </li>
            </ul>
            <span className="label label-success label-medium">
              NAME - DESC
            </span>
          </div>
        </div>
        {/* SORT : END */}
        {/* ADD : START */}
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button
            type="button"
            className="btn btn-info btn-block"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        {/* ADD : END */}
      </div>
    </>
  );
}

export default Control