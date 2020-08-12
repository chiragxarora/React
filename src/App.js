import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      
    };
  }

  render(){

    return(
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
