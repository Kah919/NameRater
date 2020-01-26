import React from 'react';
import styled from 'styled-components';

const Arrow = styled.p`
    width: 0;
	height: 0;
	border-left: 18px solid transparent;
	border-right: 18px solid transparent;
	border-top: 25px solid #555;
    float: right;
    position: relative;
    margin-top: -4%;
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