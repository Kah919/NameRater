import React from 'react';
import Loading from './loading.gif';
import styled from 'styled-components';

export default () => {
    const Img = styled.img`
    height: 100vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;
    
    return(
        <div>
            <Img src={Loading} alt="loading"></Img>
        </div>
    )
}