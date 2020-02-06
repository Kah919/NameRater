import React, { Component } from 'react';

class GenderForm extends Component {
    render() {
        return(
            <div>
                <h1>Are you a Boy or a Girl?</h1>
                <select name='sex' onChange={this.props.handleDropDown}>
                <option value=''>--</option>
                <option value='male'>Boy</option>
                <option value='female'>Girl</option>
                </select> 
            </div>
        )
    }
}

export default GenderForm;