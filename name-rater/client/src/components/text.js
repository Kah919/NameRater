import React from 'react';
import styled from 'styled-components';

const Arrow = styled.p`
    width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-top: 50px solid #555;
    float: right;
    position: relative;
    margin-top: -2%;
`;

export default (props) => {

    return(
        <>
            <p>{props.msg1}</p>
            <p>{props.msg2}</p>
            <Arrow className="arrow"></Arrow>            
        </>
    )
}