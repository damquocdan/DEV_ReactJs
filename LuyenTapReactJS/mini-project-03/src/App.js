import { useEffect, useState } from "react";
import Control from "./components/Control";
import Form from "./components/Form";
import ListTask from "./components/ListTask";
import Title from "./components/Title";
import { listTasks } from "./Data/listTaskData,";

function App() {
  // Name localStorage
  const nameLocalStorage = "TASKS";
  // Tạo state lưu mock data
  // const [tasks, setTasks] = useState(listTasks);
  const [tasks, setTasks] = useState(() => {
    const lists = JSON.parse(localStorage.getItem(nameLocalStorage));
    if (lists === null) {
      return listTasks;
    } else {
      return lists;
    }
  });
  // Khi tasks thay đổi thì lưu vào localStorage
  useEffect(() => {
    localStorage.setItem(nameLocalStorage, JSON.stringify(tasks));
  }, [tasks]);

  const initTask = {
    taskId: 0,
    taskName: "",
    level: "",
  };

  // task: add, edit
  const [task, setTask] = useState(initTask);

  // 5.2 toggle form
  const [isToggle, setToggle] = useState(false);

  // State quản lý chức năng thêm / sửa
  const [actionName, setActionName] = useState("Add");
  // Sử lý sự kiện add task / edit task => onclick button add / edit của Task
  const handleAddOrEditTask = (toggle, actionName, task) => {
    setToggle(toggle); // Hiển thị form
    setActionName(actionName); // Quản lý chức năng thêm/ sửa
    if (task !== null) {
      setTask(task); // Dữ liệu render lên form trước khi sửa
    }
  };

  // Sử lý sự kiện cancel form
  const handleCancel = () => {
    setToggle(false);
  };

  // Sử lý sự kiện submit form
  const handleSubmit = (task) => {
    console.log("add task log", task);
    // Cách 1
    // // Xử lý trường hợp thêm mới
    // if (task.taskId === 0) {
    //   task.taskId = tasks.length + 1;
    //   setTasks([...tasks, task]);
    // }
    // // Xử lý trường hợp edit
    // else {
    //   let index = tasks.findIndex((item) => item.taskId === task.taskId);
    //   tasks[index] = task;
    //   setTasks([...tasks]);
    // }

    // Cách 2:
    if (actionName === "Save") {
      setTasks((prev) => {
        let taskIdAdd = prev.length <= 0 ? 1 : prev[prev.length - 1].taskId + 1;
        const taskAdd = {
          taskId: taskIdAdd,
          taskName: task.taskName,
          level: task.level,
        };

        return [...prev, taskAdd];
      });
    } else {
      // Action name === "Update" => Cập nhật trường hợp sửa
      // setTasks((prev) => {
      //   let index = prev.findIndex((item) => item.taskId === task.taskId);
      //   prev[index] = task;
      //   return [...prev];
      // });
      setTasks((prev) => {
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].taskId === task.taskId) {
            prev[i] = task;
          }
        }
        return [...prev];
      });
    }
  };
  // End submit form

  // Sử lý sự kiện delete task
  const handleDelete = (task) => {
    setTasks((prev) => {
      return prev.filter((item) => item.taskId !== task.taskId);
    });
  };

  // Xử lý tìm kiếm lọc
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    setDataSearch(tasks);
  }, [tasks]);

  // Sử lý sự kiện search task
  const handleSearch = (data) => {
    if (data !== "") {
      setDataSearch((prev) => {
        return prev.filter((x) => x.taskName.includes(data));
      });
    } else {
      setDataSearch(tasks);
    }
  };

  // Sắp xếp 
  const [sort, setSort] = useState({});


  const props = {
    // Form
    onCancel: handleCancel,
    onSubmit: handleSubmit,
    actionName: actionName,
    renderTask: task, 
    // End form

    // Control
    onAddTask: handleAddOrEditTask,
    onSearch: handleSearch,
    // End control

    // List task
    renderTasks: dataSearch,
    onEditTask:handleAddOrEditTask,
    onDeleteTask: handleDelete
    // End list task
  };

  //Render form
  let elementForm = isToggle ? (<Form {...props}/>) : ( "" );


  return (
    <div>
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control {...props} />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {elementForm}
        {/* FORM : END */}
        {/* LIST : START */}
        <ListTask {...props}/>
      </div>
    </div>
  );
}

export default App;
