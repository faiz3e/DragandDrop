import React, { Component } from 'react';
import {Drag} from './Drag'
import './App.css';
import ImgCrop from './ImgCrop'
class App extends Component {
  render() {
    return (
      <div className="App">
   
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Drag/> */}
<ImgCrop/>
      </div>
    );
  }
}

export default App;
