import React, { Component } from 'react'
import EventDemo3 from './EventDemo3';
import EventDemo1 from './EventDemo1';

export default class RenderCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,

        }
    }
    handleChange = ()=>{
        let check = !this.state.isActive;
        this.setState({
            isActive:check
        })
    }
    handleClick=()=>{
        alert("check"+this.state.isActive)
    }
    render() {
        let comp = this.state.isActive? <EventDemo1/>: <EventDemo3/>
        let gender = this.state.isActive?'nam':'nữ';
        return (
            
            <div>
                <hr />
                <h2>Render có điều kiện</h2>
                <div>
                    <input type='checkbox' id='gt'
                        value={this.state.isActive}
                        onChange={this.handleChange()} 
                        />
                        <label htmlFor='gt'>{gender}</label>
                </div>
                <button onClick={this.handleClick}>Click</button>
             {comp}
            </div>
        )
    }
}
