import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    position: relative;
    border: 5px solid black;
    border-style: double;
    border-radius: 10px;
    width: 12%;
    font-size: 5vw;
    padding: 0;
    font-family: 'pokemon-font', monospace;
    left: 88%;
    bottom: 500%;
`;

const Gender = styled.h1`
    margin-left: 25%;
`

export default (props) => {
    return (
        <Container>
            <Gender className="hover_arrow"> Boy </Gender>
            <Gender className="hover_arrow"> Girl </Gender>
        </Container>
    )
}