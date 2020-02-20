import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import Oak from '../pics/oak.jpg';
import Text from './text';
import GenderForm from './GenderForm';
import BoyGirlForm from './BoyGirlForm';
import Click from '../audio/click.mp3';


// const Div = styled.div`
//     border: 5px solid black;
//     border-style: double;
//     width: 100%;
//     border-radius: 10px;
//     font-size: 4vw;
//     padding: 0;
//     font-family: 'pokemon-font', monospace;
//     bottom: 0;
//     position: fixed;
//     grid-area: text;
// `;

// const Container = styled.div`
//     display: grid;
//     grid-template-columns: [main] 80% [side] 20%;
//     grid-template-rows: [row1] 30% [row2] 10% [row3] 30% [row4] 30%;
// `;

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
            <div className="title_container">
                { this.renderRedirect() }
                <img className="oak" src={Oak} alt="Oak"></img>
                <div className="text" onClick={ this.nextText }>
                    {this.text()}
                </div> 
                { this.state.genderForm ? <BoyGirlForm handleGenderSelect={ this.handleGenderSelect }/> : null }
            </div>
        )
    }    
}

export default TitleScreen;