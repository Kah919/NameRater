import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Oak from '../pics/oak.jpg';
import Text from '../components/Text';
import GenderForm from '../components/GenderForm';
import Click from '../audio/click.mp3';

class Intro extends Component {
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
                { this.state.genderForm ? <GenderForm handleGenderSelect={ this.props.handleGenderSelect }/> : null }
            </div>
        )
    }    
}

export default Intro;