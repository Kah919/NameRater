import React from 'react';

export default (props) => {
    return (
        <div className="gender_form">
            <p className="hover_arrow gender_select" data-gender="male" onClick={ props.handleGenderSelect }> Boy </p>
            <p className="hover_arrow gender_select" data-gender="female" onClick={ props.handleGenderSelect }> Girl </p>
        </div>
    )
}