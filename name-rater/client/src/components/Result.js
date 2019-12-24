import React, { Component } from 'react';

class Result extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/names/${this.props.location.formProps.sex}`)
            .then(res => res.json())
            .then(data => this.setState({results: data}))
    }

    // fetch(`http://localhost:5000/api/names/${this.state.sex}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    render() {
        // console.log(this.props.location.formProps.sex)
        console.log(this.state.results)
        return(
            <>
                <h1> HI From The Results Component</h1>
            </>
        )
    }
}

export default Result;
