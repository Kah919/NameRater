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

const P = styled.p`
    margin-left: 5%;
    padding: 0.5%;
`;

export default (props) => {

    return(
        <>
            <P>{props.msg1}</P>
            <P>{props.msg2}</P>
            <Arrow className="arrow"></Arrow>            
        </>
    )
}