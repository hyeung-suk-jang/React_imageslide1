import React, { Component } from 'react';
import Slider from './component/slider.jsx'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Image Slider</h1>
        <Slider/>
      </div>
    );
  }
}

export default App;
