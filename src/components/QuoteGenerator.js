import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const QuoteGenerator = (props) => (
    <Card>
        <CardContent>
        {
            props.selectedQuote ? 
            (
                <Typography>
                    {props.selectedQuote.quote} - {props.selectedQuote.author}
                </Typography>
            ) : null
        }
        </CardContent>
        <CardActions>
            <Button size='small' onClick={props.assignNewQuoteIndex}>Next Quote</Button>
        </CardActions>
    </Card>
);

export default QuoteGenerator