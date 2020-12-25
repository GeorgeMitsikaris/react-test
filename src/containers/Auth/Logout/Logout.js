import React, { Component } from 'react';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }
  
  render() {
    return (
      <div>
        <Redirect to='/' />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);