import React, { Component } from 'react'
import WelcomeRedux from './components/WelcomeRedux';
import { connect } from 'react-redux';
import { actChangeCourseName, actChangeUserName } from './actions';
class App extends Component {
  
  handleChangUserName = () => {
    this.props.changUserName();
  };

  handleChangCourseName = () => {
    this.props.changCourseName();
  }
  render() {
    return (
      <div>
      
        <WelcomeRedux />
        <button onClick={this.handleChangUserName}>Change UserName</button>
        <button onClick={this.handleChangCourseName}>Change CourseName</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatchEvent) => {
  return { 
    changUserName: ()=> {
      dispatchEvent(actChangeUserName())
    },
    changCourseName: () => {
      dispatchEvent(actChangeCourseName())
    }
  };
};

export default connect(null, mapDispatchToProps) (App);