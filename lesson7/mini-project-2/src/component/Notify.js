import React, { Component } from 'react'
import { connect } from 'react-redux'
// import notify from '../reducers/notify'
 class Notify extends Component {
  render() {
    return (
        <div className="alert alert-success" role="alert" id="mnotification">
        {/* Updated <b>ivysaur</b> */}
        <b>{this.props.message}</b>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    message:state.notify,
  }
}
export default connect(mapStateToProps,null)(Notify)