import React from 'react';
import styled from 'styled-components';


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