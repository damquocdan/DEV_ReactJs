import logo from './logo1.jpg';
import './App.css';
import FunComps from './components/FunComp';
import ClassComp from './components/ClassComp';
import ArrowFunction from './components/ArrowFunction';
import MemberInfor from './components/MemberInfor';
import DemoState from './components/DemoState';
import { useState } from 'react';

function App() {
  const job = "Developer";
  const name = "Đàm Quốc Dân";
  const bd = "Danli";
  const elementCompany = (
    <h2> Wellcome to , {bd} {job}</h2>
  );
  const elementname = (
    <h3>Tôi tên là {name}</h3>
  )
function formatName(user) {
    return user.firstName + "  " + user.lastName +" " +user.birthday;
  }
  const users = {
    firstName: 'Đàm Quốc',
    lastName: 'Dân',
    birthday:'02-09-2003'
  }
  const member = {
    path:"/h.png",
    name:"Đàm QUốc Dân",
    age: 19
  }
  const elementFullname = (
    <div>
      <h2>hello, {formatName(users)} bạn có khoẻ không</h2>
      <p>wellcome to , {name}</p>
    </div>
  )
  function MyForm() {
    const [myCar, setMyCar]= useState("volvo");
    const handleChange = (Event) =>{
      setMyCar(Event.target.value)
    }
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"  
    );
    const handleChange1 = (Event) =>{
      setTextarea(Event.target.value)
    }
    const [inputs, setInputs] = useState({});

    const handleChange2 = (Event)=>{
      const name = Event.target.name;
      const value = Event.target.value;
      setInputs(values =>({...values,[name]:value}));
    }
    const handleSubmit = (Event) =>{
      Event.preventDefault();
      console.log(inputs);
    }
    return(
      <form onSubmit={handleSubmit}>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <hr/>
        <textarea value={textarea} onChange={handleChange1}/>
        <hr/>
        <label>
          Enter your name:
          <input
          type='text'
          name='username'
          value={inputs.username || ""}
          onChange={handleChange2}
          />
        </label>
        <label>
          <input
          type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange2}
          />

        </label>
        <input type='submit'/>

      </form>
    )
  }  
  return (
    <div className="App">
      <img src={logo} className="App-logo1" alt="logo1" />
      <hr />
      <MyForm/>
      {elementCompany}
      {elementname}
      <hr/>
      {elementFullname}
      { }
      <FunComps/>
      <FunComps name = "Đàm Quốc Dân" company = "DevMaster" address = "tien bao"/>
      <ClassComp name ="Quân" address = "Từ Sơn"/>
      <ArrowFunction/>
      <ArrowFunction info ="chúng tôi là những chiến sỹ code thực chiến hihi"/>
      <MemberInfor info={member}/>
      <DemoState/>
    </div>
  );
}



export default App;
