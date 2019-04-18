import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import QuoteGenerator from './components/QuoteGenerator';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedIndex: null,
      colorIndex: null,
      colors: ['#acc7dc', '#d6dde3', '#8ac5c3', '#edece8', '#ff9681', '#eeebdc', '#e2d4d4', '#bfb1d5', '#fed1be', '#f0e0a2', '#ddf1e8'],
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
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={12} lg={8} item>
        {this.selectedQuote ? 
        <QuoteGenerator selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
        : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
