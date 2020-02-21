import React, { Component } from 'react';

class NameForm extends Component {
    render() {
        return(
            <div>
                <h1>What's Your Name?</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' name='name' value={ this.props.value } onChange={ this.props.handleChange }/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default NameForm;