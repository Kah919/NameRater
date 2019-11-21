import React, { Component } from 'react';

class NameList extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/names/male`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                list: data
            })
        })
    }

    render() {
        console.log(this.state.list)
        return(
            <>
                <h1> HI </h1>
            </>
        )
    }
}

export default NameList;
