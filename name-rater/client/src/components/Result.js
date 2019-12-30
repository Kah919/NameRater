import React, { Component } from 'react';

class Result extends Component {
    state = {
        user: {},
        prevFive: {},
        nextFive: {}
    }

    componentDidMount() {
        const params = this.props.location.formProps;
        let lower = params.name.toLowerCase()
        let normalized = lower.charAt(0).toUpperCase() + lower.slice(1)
        fetch(`http://localhost:5000/api/names/${params.sex}`)
            .then(res => res.json())
            .then(data => {
                const person = data.find(info => info.name === normalized)
                person.index = data.findIndex(ele => ele.name === normalized) + 1

                this.setState({
                    user: person
                })
            })
    }

    render() {
        return(
            <>
                <h1>Results!</h1>
                <h2>{this.state.user.index}. {this.state.user.name}</h2>
                {/* <h2>Rank: {this.state.results.index}</h2> */}
                {/* <h2>People born with your name in 2019: {this.state.results.count}</h2> */}
                {/* <h2>Gender: {this.props.location.formProps.sex}</h2> */}
            </>
        )
    }
}

export default Result;
