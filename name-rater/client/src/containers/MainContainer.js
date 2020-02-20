import React, { Component } from 'react';
import Intro from './Intro'

class MainContainer extends Component{
    
    state = {
        gender: "",
        name: ""
    }

    renderComponent = () => {
        if(this.state.name) {
            // return result component
        } else if(this.state.name) {
            // return name component
        } else {
            // return intro component
            return <Intro />
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