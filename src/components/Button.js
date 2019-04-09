import React from 'react';

// Presentational component, stateless functional component
// custom wrapper around the HTML button element
const Button = ({ buttonDisplayName, clickHandler }) => (
    <button onClick={clickHandler}>{buttonDisplayName}</button>
);

export default Button;