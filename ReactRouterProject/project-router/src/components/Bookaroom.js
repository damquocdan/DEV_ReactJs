import { useEffect, useState } from "react";
import Control from "../CPNbookaroom/Control";
import Form from "../CPNbookaroom/Form";
import ListTask from "../CPNbookaroom/ListTask";
import { listTasks } from "../Data/listTaskData,";

function Bookaroom() {
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
  const handleSort = (param)=>{
    console.log("param:",param);
    let arr = param.split('-');
    console.log(arr);
    if(arr[0]==='name'){
      if(arr[1]==='asc'){
        setTasks(prev=>{
           prev.sort((a,b)=>{
            let x = a.taskName.toLowerCase();
            let y = b.taskName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
          return [...prev];
        })
      }else{
        setTasks(prev=>{
          prev.sort((a,b)=>{
           let x = a.taskName.toLowerCase();
           let y = b.taskName.toLowerCase();
           if (x < y) {return 1;}
           if (x > y) {return -1;}
           return 0;
         });
         return [...prev];
       })
      }
    }

    if(arr[0]==='level'){
      if(arr[1]==='asc'){
        setTasks(prev=>{
           prev.sort((a,b)=>{
            let x = a.level.toLowerCase();
            let y = b.level.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
          return [...prev];
        })
      }else{
        setTasks(prev=>{
          prev.sort((a,b)=>{
           let x = a.level.toLowerCase();
           let y = b.level.toLowerCase();
           if (x < y) {return 1;}
           if (x > y) {return -1;}
           return 0;
         });
         return [...prev];
       })
      }
    }
}

  return (
    <div style={{backgroundImage:`url("https://images.france.fr/zeaejvyq9bhj/6Z1SVHnHAydeYwlUdZ07rO/a72d56f916952613833b53d4d698b8e3/1.png?w=1120&h=490&q=70&fl=progressive&fit=fill")` }}>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <div className="container">
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
          onAddTask={handleAddOrEditTask}
          onSearch={handleSearch}
          onSort={handleSort}
        />
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

export default Bookaroom;
