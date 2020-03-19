import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2 className="counter">{counter}</h2>
      <button className="btn btn-success btn-lg mr-1 inc" onClick={inc}>INC</button>
      <button className="btn btn-danger btn-lg mr-1 dec" onClick={dec}>DEC</button>
      <button className="btn btn-dark btn-lg rnd" onClick={rnd}>RND</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state,
  }
}

const mapDispatchToProps = dispatch => {
  const { dec, inc, rnd } = bindActionCreators(actions, dispatch);

  return {
    dec,
    inc,
    rnd: () => {
      const randomValue = Math.floor(Math.random()*10);
      rnd(randomValue);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
