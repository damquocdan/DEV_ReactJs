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
        <h1 className="panel-heading"
        style={{backgroundColor:'#d7b659',
      color:'white'}}
        >List of rooms booked</h1>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                STT
              </th>
              <th>Room use date</th>
              <th style={{ width: "20%" }} className="text-center">
                Accomdation
              </th>
              <th style={{ width: "20%" }}>Operation</th>
            </tr>
          </thead>
          <tbody>{elementTask}</tbody>
        </table>
      </div>
    </>
  );
}

export default ListTask;
