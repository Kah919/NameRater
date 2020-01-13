import React, { Component } from 'react';

class Result extends Component {
    state = {
        user: {},
        prevFive: [],
        nextFive: []
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
                const curr = person.index

                const prevFive = this.prevFive(data, curr);
                const nextFive = this.nextFive(data, curr);

                this.setState({
                    user: person,
                    prevFive,
                    nextFive
                })
            })
            .catch(err => console.log(err))
    }

    prevFive = (data, idx) => {
        let arr = [];
        let curr = idx - 6;
        while(curr + 1 < idx) {
            const newData = data[curr];
            newData.index = curr;
            arr.push(newData);
            curr++;
        }
        return arr;
    }

    nextFive = (data, idx) => {
        let arr = [];
        let curr = idx;
        while(curr < idx + 5) {
            const newData = data[curr];
            newData.index = curr;
            arr.push(newData);
            curr++;
        }
        return arr;
    }

    render() {
        console.log(this.state)
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
