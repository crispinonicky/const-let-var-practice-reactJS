import React, { Component } from 'react';


// var someVar = "Hello world"


class ConstLetVar extends Component {
  constructor (props){
    super(props)

    let someVar = "Hola amigo!"
    if (someVar === 'Hola amigo!'){
      someVar = 'Same to you, friend!'
    }
    
    // someVar = "Hello there again!"
    // const someVar = "halooo world"
    // commented out redefined versions of someVar to prevent errors
    console.log(someVar)
  }
  
  //constructor is called before the render

  render() {
    // someVar = "hello hello hellooo"
    // console.log(someVar)
    return (
      <div className="App">
<h3>This was a review on how const, let, and var behave in 
        both local and global scope. I'm reviewing this after 
        realizing that I need a refresher on it from my interviews</h3>

        <p>Comments and the console should give a better idea of how I was practicing.</p>
      </div>
    );
  }
}

export default ConstLetVar;
