import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import Oak from './oak.jpg';
import Text from './text';
import Form from './Form';


const Div = styled.div`
    border: 5px solid black;
    border-style: double;
    width: 100%;
    border-radius: 10px;
    font-size: 4vw;
    padding: 2%;
    font-family: 'pokemon-font', monospace;
`;

const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 2fr 1fr;
`;

const Img = styled.img`
    display: block;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
`;

class TitleScreen extends Component {
    state = {
        message: [
            "Hello there! Welcome to the",
            "World of Pokemon!",
            "My name is OAK!",
            "People call me",
            "the Pokemon Prof!",
            "First are you a boy or a girl?"
        ],
        genderForm: false
    }

    nextText = () => {
        if(this.state.message.length > 2) {
            this.setState({
                message: [...this.state.message.splice(2)],
            })
        } else {
            this.renderGenderForm()
        }
    }

    text = () => {
        return <Text msg1={this.state.message[0]} msg2={this.state.message[1]}/>
    }

    renderGenderForm = () => {
        this.setState({
            genderForm: true
        })
    }

    render() {
        return (
            <Container>
                <Img src={Oak} alt="Oak"></Img>
                <Div onClick={ this.nextText }>
                    {this.text()}
                </Div> 
                { this.state.genderForm ? <Form /> : null }
            </Container>
        )
    }    
}

export default TitleScreen;