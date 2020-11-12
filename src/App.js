import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(car) {
    this.setState((prevState) => ({
      [car]: !prevState[car],
    }));
  }
  
  render() {
    const contextValue = {
      ...this.state,
      handle: this.handleButton,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
