import React, { Component } from 'react';
import Result  from './Result';

class Form extends Component {
    state = {
        sex: "",
        name: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>What's Your Name?</h1>
                <form>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <input type='submit' onSubmit={this.handleSubmit}/>
                </form>
                {/* <Result /> */}
            </div>
        )
    }
}

export default Form;

