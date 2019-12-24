import React, { Component } from 'react';

class Result extends Component {
    state = {
        results: []
    }

<<<<<<< HEAD
    componentDidMount() {
        fetch(`http://localhost:5000/api/names/${this.props.location.formProps.sex}`)
            .then(res => res.json())
            .then(data => this.setState({results: data}))
    }
=======
    // componentDidMount() {
    //     fetch(`http://localhost:5000/api/names/${this.props.location.formProps.sex}`)
    //         .then(res => res.json())
    //         .then(data => this.setState({results: data}))
    // }
>>>>>>> e173a05b37faec1212b74132eec70227299c4fd0

    // fetch(`http://localhost:5000/api/names/${this.state.sex}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    render() {
        // console.log(this.props.location.formProps.sex)
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(this.state.results)
=======
        // console.log(this.state.results)
>>>>>>> e173a05b37faec1212b74132eec70227299c4fd0
=======
        // console.log(this.state.results)
>>>>>>> e173a05b37faec1212b74132eec70227299c4fd0
        return(
            <>
                <h1> HI From The Results Component</h1>
            </>
        )
    }
}

export default Result;
