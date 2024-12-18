import React, { Component } from 'react'

export default class DemoState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Đàm QUốc Dana",
            age: 22
        }
    }
    handleChange = ()=>{
        this.setState({
            name:"Bùi Minh THành",
            age:21
        })
    }
    render(){
        return (
            <div>
                <h2>Thằng cuuuu</h2>
                <p>Name: {this.state.name}</p>
                <p>age: {this.state.age}</p>
                <button onClick={this.handleChange}>change</button>
            </div>
        )
}
}
