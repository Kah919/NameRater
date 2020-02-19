import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import Oak from '../pics/oak.jpg';
import Text from './text';
import GenderForm from './GenderForm';
import BoyGirlForm from './BoyGirlForm';

import Click from '../audio/click.mp3';


const Div = styled.div`
    border: 5px solid black;
    border-style: double;
    width: 100%;
    border-radius: 10px;
    font-size: 4vw;
    padding: 0;
    font-family: 'pokemon-font', monospace;
`;

const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
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
        genderForm: false,
        gender: ""
    }

    audio = new Audio(Click);

    nextText = () => {
        this.audio.play()
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

    handleGenderSelect = (event) => {
        this.setState({
            gender: event.target.dataset.gender
        })
    }

    renderRedirect = () => {
        if(this.state.gender) {
            return <Redirect to={{
                pathname: '/search',
                state: { gender: this.state.gender }
            }} />
        }
    }

    

    render() {
        return (
            <Container>
                { this.renderRedirect() }
                <img className="oak" src={Oak} alt="Oak"></img>
                <Div onClick={ this.nextText }>
                    {this.text()}
                </Div> 
                { this.state.genderForm ? <BoyGirlForm handleGenderSelect={ this.handleGenderSelect }/> : null }
            </Container>
        )
    }    
}

export default TitleScreen;