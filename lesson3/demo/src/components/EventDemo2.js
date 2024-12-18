import React, { Component } from 'react'
// sử dụng sự kiện có tham số
export default class EventDemo2 extends Component {
    eventHandleClick1 = (content1) => {
        alert('button 01 was clicked');
    }
    eventHandleClick2 = (content2) => {
        alert('button 02 was clicked');
    }
    render() {
        return (
            <div className='list-group'>
                {/* funciton được gọi khi render */}
                {/* <button type='button' className='btn btn-primary' onClick={this.eventHandleClick1('Button1 was clicked')}>Button1</button> */}
                {/* function được gọi khi click button gọi arrow funciton */}
                <button type='button' className='btn btn-info' onClick={() => this.eventHandleClick2('Button2 was clicked')}>Button2</button>

            </div>
        )
    }
}
