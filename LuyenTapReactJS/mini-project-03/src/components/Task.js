import React from "react";

function Task({ renderTasks, onEditTask, onDeleteTask}) {
  // event edit task
  const handleEditTask = (task) => {
    onEditTask(true, "Update", task);
  };

    // event delete task
    const handleDelete = (task) => { 
        if (window.confirm("Bạn có chắc chắn muốn xóa không?") === true) {
             onDeleteTask(task);
        }
    };
    
  let level = "";
  if (renderTasks.level === "Small") {
    level = <span className="label label-default">Small</span>;
  } else if (renderTasks.level === "Medium") {
    level = <span className="label label-info">Midium</span>;
  } else {
    level = <span className="label label-danger">High</span>;
  }
  return (
    <>
      <tr>
        <td className="text-center">{renderTasks.taskId}</td>
        <td>{renderTasks.taskName}</td>
        <td className="text-center">{level}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleEditTask(renderTasks)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(renderTasks)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Task;
