import React, { Component } from 'react'
//Map data từ store lên-> view
// sử dụng hàm connect của redux
import {connect} from 'react-redux';
class WellcomeRedux extends Component {
    render() {
        return (
            <div>
                <h2>Dữ liệu được lấy ra từ store</h2>
                <h2>Xin chào,
                    <span className='btn btn-danger'>{this.props.userName}</span>
                </h2>
                <h3>
                    Chào mừng bạn đến với khoá học,
                    <span className='btn btn-success'>{this.props.courseName}</span>
                    tại Devmaster Academyy
                </h3>
                <div className='border border-5 p-2 rounded border-info'>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Change name</span>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        onChange={this.handleChangeUserName}></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Change password</span>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Recipient's username" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                        onChange={this.handleChangeCourseName}
                        ></input>
                    </div>

                
                </div>
            </div>
        )
    }
}
//  hàm map state trong store vơi props của component
const mapStateToProps = (state) =>{
    return{
        userName:state.userName,
        courseName:state.courseName
    }
}
export default connect(mapStateToProps,null) (WellcomeRedux);