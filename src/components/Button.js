import React from 'react';

// Presentational component, stateless functional component
const Button = ({ buttonDisplayName, clickHandler }) => (
    <button onClick={clickHandler}>{buttonDisplayName}</button>
);

export default Button;