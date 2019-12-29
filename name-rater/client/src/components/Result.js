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
                person.index = data.findIndex(ele => ele.name === params.name) + 1

                this.setState({
                    results: person
                })
            })
    }

    render() {
        console.log("HI",this.props.location.formProps)
        console.log(this.state.results)
        return(
            <>
                <h1> HI From The Results Component</h1>
                <h2>Name: {this.state.results.name}</h2>
                <h2>Rank: {this.state.results.index}</h2>
                <h2>How many people share your name: {this.state.results.count}</h2>
                <h2>Gender: {this.props.location.formProps.sex}</h2>
            </>
        )
    }
}

export default Result;
