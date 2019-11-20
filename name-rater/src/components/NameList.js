import React, { Component } from 'react';

export default props => {

    let list = () => {
        fetch(`http://localhost:5000/api/names/male`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return(
        <>
            <h1> HI </h1>
            { list() }
        </>
    )
}

