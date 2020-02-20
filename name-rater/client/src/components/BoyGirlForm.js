import React from 'react';
import styled from 'styled-components';


// const Container = styled.div`
//     position: relative;
//     border: 5px solid black;
//     border-style: double;
//     border-radius: 10px;
//     width: 12%;
//     font-size: 5vw;
//     padding: 0;
//     font-family: 'pokemon-font', monospace;
//     left: 88%;
//     bottom: 500%;
//     top: 0;
//     grid-area: "form";
//     width: 100%;
// `;

const Gender = styled.h1`
    margin-left: 25%;
`

export default (props) => {
    return (
        <div className="gender_form">
            <Gender className="hover_arrow" data-gender="male" onClick={ props.handleGenderSelect }> Boy </Gender>
            <Gender className="hover_arrow" data-gender="female" onClick={ props.handleGenderSelect }> Girl </Gender>
        </div>
    )
}