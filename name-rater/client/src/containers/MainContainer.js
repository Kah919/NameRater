import React, { Component } from 'react';
import Intro from './Intro'

class MainContainer extends Component{
    
    state = {
        gender: "",
        name: ""
    }

    handleGenderSelect = (event) => {
        debugger
        this.setState({
            gender: event.target.dataset.gender
        })
    }

    renderComponent = () => {
        if(this.state.name) {
            // return result component
        } else if(this.state.name) {
            // return name component
        } else {
            // return intro component
            return <Intro handleGenderSelect={ this.handleGenderSelect }/>
        }
    }

    render(){
        return(
            <div>
                { this.renderComponent() }
            </div>
        )
    }
}

export default MainContainer;