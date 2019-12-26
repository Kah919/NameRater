import React, { Component } from 'react';

class Result extends Component {
    state = {
        results: {}
    }

    componentDidMount() {
        const params = this.props.location.formProps;
        fetch(`http://localhost:5000/api/names/${params.sex}`)
            .then(res => res.json())
            .then(data => {
                const person = data.find(info => info.name === params.name)
                this.setState({
                    results: person
                })
            })
    }

    // fetch(`http://localhost:5000/api/names/${this.state.sex}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    render() {
        console.log("HI",this.props.location.formProps)
        console.log(this.state.results)
        return(
            <>
                <h1> HI From The Results Component</h1>
                <h2>{this.state.results.name}</h2>
                <h2>{this.state.results.count}</h2>
                <h2>{this.props.location.formProps.sex}</h2>
            </>
        )
    }
}

export default Result;
