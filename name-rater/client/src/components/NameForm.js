import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NameForm extends Component {
    render() {
        return(
            <div>
                <h1>What's Your Name?</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' name='name' value={ this.props.value } onChange={ this.props.handleChange }/>
                        {/* <Link to={{
                            pathname: './results',
                            formProps:{
                                name: this.props.value,
                                sex: this.props.sex
                            }
                        }}>
                        
                        </Link> */}
                        <input type='submit'/>
                </form>
                </div>
        )
    }
}

export default NameForm;