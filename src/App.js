import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TitlesBox from './TitlesBox';
import ContentsBox from './ContentsBox';

const transformUpper = (s) => s.toUpperCase();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  //   render() {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <h1 className="App-title">Welcome to React</h1>
  //         </header>
  //         <p className="App-intro">
  //           To get started, edit <code>src/App.js</code> and save to reload.
  //         </p>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div className="App">
        <TitlesBox displayText={this.state.text}
          changeHandler={this._setNewText}
        />
        <ContentsBox displayText={this.state.text}
          transformText={transformUpper}
        />
      </div>
    );
  }

  _setNewText = (newText) => {
    this.setState({
      text: newText
    });
  }

}


export default App;
