import React, { Component } from 'react';
import Result  from './Result';
// import { response } from 'express';

class Form extends Component {
    state = {
        sex: "",
        name: "",
        // names: []
    }

    handleDropDown = (event) => {
        if(!!event.target.value){
            this.setState({sex: event.target.value}) 
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(``)
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
                            <input type='submit'/>
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

