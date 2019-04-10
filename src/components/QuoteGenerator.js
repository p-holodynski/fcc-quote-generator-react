import React from 'react';
import Button from './Button';

const QuoteGenerator = (props) => (
    <React.Fragment>
    {props.selectedQuote ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}` : ''}
    <Button buttonDisplayName="Next quote" clickHandler={props.assignNewQuoteIndex}/>
    </React.Fragment>
);

export default QuoteGenerator