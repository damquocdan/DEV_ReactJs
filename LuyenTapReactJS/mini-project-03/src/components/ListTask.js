import React from "react";
import Task from "./Task";

function ListTask({ renderTasks, onEditTask, onDeleteTask }) {
  console.log("renderTasks", renderTasks);

  // event edit task
  const handleEditTask = (toggle, action, task) => {
    onEditTask(toggle, action, task);
  };

  // event delete task
  const handleDelete = (task) => {
    onDeleteTask(task);
  };

  let elementTask = renderTasks.map((task, index) => {
    return (
      <Task
        key={index}
        renderTasks={task}
        stt={index + 1}
        onEditTask={handleEditTask}
        onDeleteTask={handleDelete}
      />
    );
  });
  return (
    <>
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Task</th>
              <th style={{ width: "20%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>{elementTask}</tbody>
        </table>
      </div>
    </>
  );
}

export default ListTask;
