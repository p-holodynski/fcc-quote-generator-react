import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedIndex: null
    }
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedIndex)){
      return undefined;
    }
    return this.state.quotes[this.state.selectedIndex];
  }

  /**
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty returns undefined
   */
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return console.log("array is empty or don't exist");
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex(){
    this.setState({ selectedIndex: this.generateNewQuoteIndex()});
  }

  render() {
    console.log(this.state.selectedIndex);
    return (
      <div className="App" id="quote-box">
        <QuoteGenerator selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
      </div>
    );
  }
}

export default App;
