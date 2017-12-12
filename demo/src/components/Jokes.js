import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import '../App.css';
import { bindActionCreators } from 'redux';

class Jokes extends Component {
  componentWillMount() {
    if(this.props.joke === 'Placeholder') {
      this.props.actions.loadJoke()
    }
  }
  
  render() {
    const url = 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'
    return (
      <div className="App">
        <p className="App-intro">
            {this.props.joke}
        </p>
        <img src={url} alt="Chuck Norris" onClick={this.props.actions.loadJoke} />
        <br/>
      </div>
    );
  }
}

Jokes.propTypes = {
  joke: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    joke: state.joke
  }
}

function mapDispatchToProps(dispatch) {
  return  {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes)