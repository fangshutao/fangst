import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  systemReady: state.global.systemReady
});

@connect(mapStateToProps)
class Demo3 extends Component {
  render() {
    return <section>{this.props.systemReady}</section>;
  }
}

export default Demo3;
