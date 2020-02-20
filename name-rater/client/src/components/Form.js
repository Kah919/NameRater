import React, { Component } from 'react';
// import ResultContainer from '../containers/ResultContainer'
import Result  from './Result';
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

