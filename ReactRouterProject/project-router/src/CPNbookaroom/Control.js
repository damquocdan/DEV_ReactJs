import React, { useState } from 'react'

function Control({ onAddTask, onSearch, onSort}) {
  // Quản lý keyword
  const [keyword, setKeyword] = useState("");

  // Chuyển dữ liệu sang app
  const handleSearch = () => {
    console.log("keyword", keyword);
    onSearch(keyword);
  };
  const[sort,setSort]=useState('NAME-ASC');

  const handleSort = (param)=>{
    console.log("click a:",param);
    setSort(param.toUpperCase())
    onSort(param)
  }

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
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-info"
                type="button"
                onClick={handleSearch}
              >
                Search booking date
              </button>
            </span>
          </div>
        </div>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          
        </div>
        {/* SORT : END */}
        {/* ADD : START */}
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button
            type="button"
            className="btn btn-block"
            onClick={handleAddTask}
          style={{backgroundColor: '#d7b659',borderRadius:'50%',fontSize:'30px'}
                }
          >
            Book a room
          </button>
        </div>
        {/* ADD : END */}
      </div>
    </>
  );
}

export default Control