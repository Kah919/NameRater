import React from 'react';
import TypeWriter from 'react-typewriter';

export default (props) => {
    return(
        // <TypeWriter typing={1}>
        <>
            <p>{props.msg1}</p>
            <p>{props.msg2}</p>
        </>
        // </TypeWriter>
    )
}