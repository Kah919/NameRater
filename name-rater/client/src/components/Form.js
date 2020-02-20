import React, { Component } from 'react';
// import ResultContainer from '../containers/ResultContainer'
// import Result  from './Result';
// import { Link, Redirect } from 'react-router-dom';
import ErrorModal from './ErrorModal';
import GenderForm from './GenderForm';
import NameForm from './NameForm';


class Form extends Component {
    state = {
        sex: "",
        name: "",
        submit: false,
        names: [],
        modal: false
    }

    handleDropDown = (event) => {
        if(!!event.target.value){
            this.setState({sex: event.target.value}) 
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting", this.state.name)
        this.setState({submit: !this.state.submit})
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
            this.setState({
                modal: true
            })
        }
    }

    stopModal = () => {
        this.setState({
            modal: false
        })
    }

    render() {
        console.log(this.props.location.state.gender)
        return(
            <div>
                { this.state.modal ? <ErrorModal stopModal={ this.stopModal } isOpen={ this.state.modal }/> : null }
                { !!this.state.sex ? <NameForm value={ this.state.name } handleSubmit={ this.handleSubmit } handleChange={ this.handleChange } sex={ this.state.sex }/> : <GenderForm handleDropDown={ this.handleDropDown } /> }
            </div>
        )
    }
}

export default Form;

