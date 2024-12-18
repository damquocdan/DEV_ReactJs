import React, { Component } from 'react'
//SỬ dụng sự kiện với State
export default class EventDemo4 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:"Đma li",
            age:19
        }
    }
    // sự kiện làm thay đổi state
    handleChange=()=>{
        this.setState({
            name:"hihi",
            age:12
        })
    }
  render() {
    return (
      <div>
        <h2>funciton với state</h2>
        <div style={{margin:"1rem 25%" , backgroundColor:"green"}}>
            <p>Name:{this.state.name}</p>
            <p>Age:{this.state.age}</p>
        </div>
        <button onClick={this.handleChange}>Change State</button>
        <input value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
      </div>
    )
  }
}
