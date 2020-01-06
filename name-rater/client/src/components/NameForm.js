import React, { Component } from 'react';

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
                                    name: this.state.name,
                                    sex: this.state.sex
                                }
                            }}> */}
                    <input type='submit'/>
                            {/* </Link> */}
                </form>
                        {/* <Result /> */}
                </div>
        )
    }
}

export default NameForm;