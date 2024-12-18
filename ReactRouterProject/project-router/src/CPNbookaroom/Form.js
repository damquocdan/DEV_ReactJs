import React, { useEffect, useState } from "react";

function Form(props) {
  const {
    onCancel,
    onSubmit,
    renderTask,
    actionName
  } = props;


  const [task, setTask] = useState(renderTask);
  console.log("Form",renderTask);

  // Cập nhật lại trạng thái task khi renderTask thay đổi
  useEffect(() => {
    if (actionName === "Update") {
      setTask(renderTask);
    } else if (actionName === "Save") {
      setTask({
        taskId: 0,
        taskName: "",
        level: task.level || "TripleRoom",
      });
    }
  }, [renderTask, actionName]);

  const handleChange = (event) => {
    const { name, value, level } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      [level]: prevTask.level === "" ? "TripleRoom" : value,
    }));
  };

  // Task xem đúng sửa không(log lại)
  useEffect(() => {
    console.log("Task event", task);
  });

  // SUbmit form
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task);
  };

  // Cancel form
  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form
            action=""
            onSubmit={handleSubmit}
            method="POST"
            className="form-inline"
          >
            <div className="form-group">
              <label className="sr-only" htmlFor="">
                label
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                name="taskName"
                value={task.taskName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="">
                label
              </label>
              <select
                name="level"
                value={task.level || "TripleRoom"}
                onChange={handleChange}
                className="form-control"
                required="required"
              >
                <option value={"DoubleRoom"}>Double room</option>
                <option value={"TripleRoom"}>Triple room</option>
                <option value={"DormRoom"}>Dorm room</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              {actionName}
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
