import React, { Component } from 'react';
import { Button } from 'reactstrap';

class NameForm extends Component {
    render() {
        return(
            <div className="name_container">
                <div className="name_top">
                    <h1 className="name_title">Your Name?</h1>
                    <form className="name_form" onSubmit={this.props.handleSubmit}>
                        <input className="name_input" type='text' name='name' value={ this.props.value } onChange={ this.props.handleChange }/>
                        <Button outline color="primary" className="name_submit">Submit</Button>
                    </form>
                </div>
                <div className="alphabets">
                    <div className="row row1">
                        <p>A</p>
                        <p>B</p>
                        <p>C</p>
                        <p>D</p>
                        <p>E</p>
                        <p>F</p>
                        <p>G</p>
                        <p>H</p>
                        <p>I</p>
                    </div>
                    <div className="row row2">
                        <p>J</p>
                        <p>K</p>
                        <p>L</p>
                        <p>M</p>
                        <p>N</p>
                        <p>O</p>
                        <p>P</p>
                        <p>Q</p>
                        <p>R</p>
                    </div>
                    <div className="row row3">
                        <p>S</p>
                        <p>T</p>
                        <p>U</p>
                        <p>V</p>
                        <p>W</p>
                        <p>X</p>
                        <p>Y</p>
                        <p>Z</p>
                        <p> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameForm;