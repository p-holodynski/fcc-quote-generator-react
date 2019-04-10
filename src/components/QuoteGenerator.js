import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from './Button';

const QuoteGenerator = (props) => (
    <React.Fragment>
    {
        props.selectedQuote ? 
        (
            <Typography>
                {props.selectedQuote.quote} - {props.selectedQuote.author}
            </Typography>
        ) : null
    }
    <Button buttonDisplayName="Next quote" clickHandler={props.assignNewQuoteIndex}/>
    </React.Fragment>
);

export default QuoteGenerator