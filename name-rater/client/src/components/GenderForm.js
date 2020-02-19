import React, { Component } from 'react';

class GenderForm extends Component {
    render() {
        return(
            <div>
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