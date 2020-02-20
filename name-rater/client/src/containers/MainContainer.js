import React, { Component } from 'react';
import Intro from './Intro'

class MainContainer extends Component{
    
    state = {
        gender: "",
        name: ""
    }

    renderComponent = () => {
        
    }

    render(){
        return(
            <div>
                <Intro />
            </div>
        )
    }
}

export default MainContainer;