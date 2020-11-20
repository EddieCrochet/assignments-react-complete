import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Throw that input ish in there and get yo self some output action!</p>
            <p>I am {props.username}</p>
        </div>
    )
};

export default userOutput;