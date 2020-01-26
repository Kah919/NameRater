import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import Oak from './oak.jpg';
import Text from './text';


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

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

class TitleScreen extends Component {
    state = {
        redirect: false,
        message: [
            "Hello there! Welcome to the",
            "World of Pokemon!",
            "My name is OAK!",
            "People call me",
            "the Pokemon Prof!",
            "First are you a boy or a girl?"
        ],
        test: false
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

    nextText = () => {
        this.setState({
            message: [...this.state.message.splice(2)],
        })
    }

    text = () => {
        return this.state.message.length < 1 ? this.redirect() : <Text msg1={this.state.message[0]} msg2={this.state.message[1]}/>
    }

    render() {
        return (
            this.state.redirect ? this.isRedirect() : 
            <>
                <Img src={Oak} alt="Oak"></Img>
                <Div onClick={ this.nextText }>
                    {this.text()}
                </Div>  
            </>
        )
    }    
}

export default TitleScreen;