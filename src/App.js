import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  nextQuoteClickHandler() {
    console.log("Hi");
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="Next quote" clickHandler={this.nextQuoteClickHandler}/>
      </div>
    );
  }
}

export default App;
