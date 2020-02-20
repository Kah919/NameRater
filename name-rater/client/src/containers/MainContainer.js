import React, { Component } from 'react';
import Intro from './Intro';
import NameForm from '../components/NameForm';
import Result from '../components/Result';

class MainContainer extends Component{
    
    state = {
        gender: "",
        name: "",
        submit: false
    }

    handleGenderSelect = (event) => {
        this.setState({
            gender: event.target.dataset.gender
        })
    }

    handleChange = (event) => {
        let charCode = this.findCharCode(event.target.value)
        this.backSpace(charCode);
        this.validInput(charCode, event.target.value);
    }

    findCharCode = (value) => {
        if(!this.state.name.length) {
            return value.charCodeAt()
        } else if(this.state.name.length >= 1) {
            return value.charCodeAt(this.state.name.length)
        }
    }

    backSpace = charCode => {
        if(!charCode) {
            this.setState({
                name: this.state.name.slice(0, -1)
            })
        }
    }

    validInput = (charCode, value) => {
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            this.setState({
                name: value
            })
        } else if(charCode){
            // this.setState({
            //     modal: true
            // })
            alert("WRONG INPUT")
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting", this.state.name)
        this.setState({submit: true})
    }

    renderComponent = () => {
        if(this.state.submit) {
            // return result component
            return <Result formProps={ { name: this.state.name, sex: this.state.gender }}/>
        } else if(this.state.gender) {
            // return name component
            return <NameForm value={ this.state.name } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
        } else {
            return <Intro handleGenderSelect={ this.handleGenderSelect }/>
        }
    }

    render(){
        console.log(this.state)
        return(
            <div>
                { this.renderComponent() }
            </div>
        )
    }
}

export default MainContainer;