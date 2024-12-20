import React, { Component } from 'react';
import {connect} from 'react-redux';

class WelcomeRedux extends Component {
  render() {
    return (
      <div>
        <h2>Xin chào, {this.props.userName}</h2>
        <h2>Chào mừng bạn đến với khoá học {this.props.courseName}</h2>
      </div>
    )
  }
}


// mapStateToProps: lấy state từ store và chuyển thành props của component
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        courseName: state.courseName,
    };
};

export default connect(mapStateToProps, null) (WelcomeRedux);