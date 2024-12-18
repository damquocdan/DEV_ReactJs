import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosUser from '../api/comments'
import { useState } from 'react';

function UpdateContact() {
  const [id, setId]=useState(0);
  const [name,setName]=useState('');
    const [tel,setTel]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [title,setTitle]=useState('');
    const [comments,setComments]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
      setId(localStorage.getItem("id"))
      setName(localStorage.getItem("name"))
      setTel(localStorage.getItem("tel"))
      setEmail(localStorage.getItem("email"))
      setAddress(localStorage.getItem("address"))
      setTitle(localStorage.getItem("title"))
      setComments(localStorage.getItem("comments"))
    },[])
    let checkActive =false;
    let checkNonActive = false;
    
    const handleUpdate =async()=>{
      await axiosUser.put("users/"+id,{id,name,tel,email,address,title,comments})
      navigate("/list-user")
    }
  return (
    <div><div className="form-contact-k">
    <form action="">
      <div className="row">
        <div className="col-2">
          <input type="text" className="inp-c"onChange={(ev)=>setName(ev.target.value)} placeholder="Name" />
        </div>
        <div className="col-2">
          <input type="number" className="inp-c"onChange={(ev)=>setTel(ev.target.value)} placeholder="Tel" />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <input type="email" className="inp-c"onChange={(ev)=>setEmail(ev.target.value)} placeholder="Email" />
        </div>
        <div className="col-2">
          <input type="text" className="inp-c"onChange={(ev)=>setAddress(ev.target.value)} placeholder="Address" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input type="text" className="inp-c"onChange={(ev)=>setTitle(ev.target.value)} placeholder="Title" />
        </div>
        <div className="col">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="area-c"
            onChange={(ev)=>setComments(ev.target.value)}
            placeholder="Comments"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={handleUpdate}>Submit</button>
        </div>
      </div>
    </form>
  </div>
    </div>

  )
}

export default UpdateContact