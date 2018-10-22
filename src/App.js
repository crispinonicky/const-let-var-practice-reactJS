import React, { Component } from 'react';
import './App.css';
import ConstLetVar from './components/ConstLetVar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConstLetVar/>

        {/* This was a review on how const, let, and var behave in 
        both local and global scope. I'm reviewing this after 
        realizing that I need a refresher on it from my interviews */}
        
      </div>
    );
  }
}

export default App;
