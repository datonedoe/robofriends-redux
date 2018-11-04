import React, { Component } from 'react';
import CounterButton from './CounterButton';
class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log('HEADER')
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={'red'}></CounterButton>
      </div>
    );
  }
}

export default Header;
