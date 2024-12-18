import React,{useState} from 'react'

 function DemoUseState() {
    // sử dụng use State
    // khởi tạo state (count=0)
    const [count,setCount] = useState(0);
    // cập nhật count
    const handleCountUp = ()=>{
        setCount((prev)=>prev+1);
    }
    const handleCountDown = ()=>{
        setCount((prev)=>prev-1);
    }
    const lists =['arr1','arr2']
    const [list, setLists]= useState(lists)
    const handlelist =(param)=>{
        switch (param) {
            case "Add":
                setLists([
                    ...list,
                    parseInt(Math.random()*100)
                ])
                break;
            case "Remove":
                list.pop();
                setCount([...list])
                break;
        
            default:
                break;
        }
    }
  return (
    <div>
        <h2>DemoUseState</h2>
        <p className='alert alert-success '>Count: {count}</p>
        <button onClick={handleCountUp}> Click count++</button>
        <button onClick={handleCountDown}> Click count--</button>
        <div className='alert alert-danger'>List: {list.toString()}</div>
        <button onClick={()=>handlelist("Add")}>Add</button>
        <button onClick={()=>handlelist("Remove")}>Remove</button>
    </div>
  )
}
export default DemoUseState;