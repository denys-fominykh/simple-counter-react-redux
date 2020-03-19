import React from 'react';

const Counter = () => {
  return (
    <div className="jumbotron">
      <h2 className="counter">0</h2>
      <button className="btn btn-success btn-lg mr-1 inc">INC</button>
      <button className="btn btn-danger btn-lg mr-1 dec">DEC</button>
      <button className="btn btn-dark btn-lg rnd">RND</button>
    </div>
  )
}

export default Counter;
