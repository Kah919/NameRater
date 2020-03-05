import React, { Component } from 'react';
import Intro from './Intro';
import NameForm from '../components/NameForm';
import Result from '../components/Result';
import ErrorModal from '../components/ErrorModal';


class MainContainer extends Component{
    state = {
        gender: "",
        name: "",
        submit: false,
        modal: false
    }

    handleGenderSelect = (event) => {
        this.setState({
            gender: event.target.dataset.gender
        })
    }

    handleClick = (event) => {
        if(event.target.tagName == "P") {
            this.setState({
                name: this.state.name += event.target.innerText
            })
        }
    }

    handleChange = (event) => {
        let charCode = this.findCharCode(event.target.value)
        this.validInput(charCode, event.target.value);
    }

    findCharCode = (value) => {
        if(!this.state.name.length) {
            return value.charCodeAt()
        } else if(this.state.name.length >= 1) {
            return value.charCodeAt(this.state.name.length)
        }
    }


    validInput = (charCode, value) => {
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || !charCode) {
            this.setState({
                name: value
            })
        } else if(charCode){
            this.setState({
                modal: true
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting", this.state.name)
        this.setState({submit: true})
    }

    stopModal = () => {
        this.setState({
            modal: false
        })
    }

    renderComponent = () => {
        if(this.state.submit) {
            return <Result formProps={ { name: this.state.name, sex: this.state.gender }}/>
        } else if(this.state.gender) {
            return <NameForm value={ this.state.name } handleClick={ this.handleClick } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } gender={ this.state.gender}/>
        } else {
            return <Intro handleGenderSelect={ this.handleGenderSelect }/>
        }
    }

    render(){
        return(
            <div>
                { this.state.modal ? <ErrorModal stopModal={ this.stopModal } isOpen={ this.state.modal }/> : null }
                { this.renderComponent() }
            </div>
        )
    }
}

export default MainContainer;