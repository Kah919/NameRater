import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Redirect } from 'react-router';


const Div = styled.div`
    border: 5px solid black;
    border-style: double;
    position: absolute;
    bottom: 0;
    height: 35%;
    width: 100%;
    border-radius: 10px;
    font-size: 4rem;
    padding: 2%;
    font-family: 'pokemon-font', monospace;
`;

class TitleScreen extends Component {
    state = {
        redirect: false
    }

    redirect = () => {
        this.setState({
            redirect: true
        })
    }

    isRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to="/search" />
        }
    }

    render() {
        return (
            this.state.redirect ? this.isRedirect() : 
            <Div onClick={ this.redirect }>
                
            </Div>
        )
    }    
}

export default TitleScreen;