import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = props => {
  return (
    <div className="App">
      <h1>Smurf Village</h1>

      {props.fetchingSmurfs && <p>Loading...</p>}

      {props.smurfs && <div>{props.smurfs.name}</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  {}
)(App);
