import React, { Component } from 'react';

class Result extends Component {
    state = {
        result: {}
    }

    // componentDidMount() {
    //     fetch(`http://localhost:5000/api/names/${this.props.sex}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             result: data
    //         })
    //     })
    // }



    render() {
        // console.log(this.state.list)
        return(
            <>
                <h1> HI From The Results Component</h1>
            </>
        )
    }
}

export default Result;
