import React, { Component } from 'react';
import ResultContainer from '../containers/ResultContainer'
import Result  from './Result';
import { Link } from 'react-router-dom';
// import { response } from 'express';

class Form extends Component {
    state = {
        sex: "",
        name: "",
        submit: false,
        names: []
    }

    handleDropDown = (event) => {
        if(!!event.target.value){
            this.setState({sex: event.target.value}) 
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({submit: !this.state.submit})
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <div>
                {
                    !!this.state.sex ?
                    <div>
                        <h1>What's Your Name?</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                            <Link to={{
                                pathname: './results',
                                formProps:{
                                    name: this.state.name,
                                    sex: this.state.sex
                                }
                            }}>
                                <input type='submit'/>
                            </Link>
                        </form>
                        {/* <Result /> */}
                    </div>
                    :
                    <div>
                        <h1>Are you a Boy or a Girl?</h1>
                        <select name='sex' onChange={this.handleDropDown}>
                            <option value=''>--</option>
                            <option value='male'>Boy</option>
                            <option value='female'>Girl</option>
                        </select> 
                    </div>
                }
            </div>
        )
    }
}

export default Form;

