import React, { Component } from 'react'
// Sử dụng sự kiện có dùng props, state.
export default class EventDemo3 extends Component {
    constructor(props){
        super(props);
        this.eventHandleClick3 = this.eventHandleClick3.bind(this);
    }
    eventHandleClick1=()=>{
        alert(this.props.name1);
    }
    eventHandleClick2=(param)=>{
        alert( param +"\n"+this.props.name2);
    }
    eventHandleClick3=()=>{
        this.props.onView("Chung Trịnh Văn");
    }

  render() {
    return (
      <div className='list-group'>
        {/* Khai báo arrow funciton */}
        <button type='button' className='btn btn-primary' onClick={this.eventHandleClick1}>Button 01</button>
        {/* Gọi funciton - arrow funciton */}
        <button type='button' className='btn btn-info' onClick={()=>this.eventHandleClick2("4 chữ tế")}>Button 02</button>
        {/* bind this cho funciton ở constructor */}
        <button type='button' className='btn btn-success' onClick={this.eventHandleClick3}>Button 03</button>
      </div>
    )
  }
}
