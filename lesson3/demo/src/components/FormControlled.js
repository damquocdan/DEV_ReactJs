import React, { Component } from 'react'

export default class FormControlled extends Component {
    constructor(props){
        super(props);
        this.state ={
            studentName:'DAnlll',
            course:"css"
        }
    }
    // sử lý khi submit form
    handleSubmit=(event)=>{
        event.preventDefault();
        alert("xin chào,  " +this.state.studentName)
    }
    render() {
        return (
            <div>
                <hr/>
                <h2>Controlled components Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Tên sinh viên:
                        <input 
                        value={this.state.studentName} 
                        onChange={(ev)=>this.setState({studentName:ev.target.value})}
                        />
                        

                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
