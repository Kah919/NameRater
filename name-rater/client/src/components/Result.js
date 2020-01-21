import React, { Component } from 'react';
import Loading from './Loading';
import { Redirect } from 'react-router'



class Result extends Component {
    state = {
        user: {},
        prevFive: [],
        nextFive: [],
        loading: true,
        redirect: false
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
                    nextFive,
                    loading: false
                })
            })
            .catch(err => {
                alert(`Congradulations! Your name ${this.props.location.formProps.name} is super rare and has not been updated in our database yet! Redirecting back to home page...`);
                this.setState({
                    redirect: true
                })
            })
    }

    renderPrevFive = () => {
            return this.state.prevFive.map(item => <h2>{item.index}. {item.name} - {item.count * 20}x</h2>)
    }

    prevFive = (data, idx) => {
        // data index starts at 0 so curr starts at 1 so we need to normalize the curr or change the curr variable in the fetch
        // while loop starts at the max end of curr, change while loop to start at the idx of the current input - 1 instead of the end of the array
        // change push to unshift into array
        // change the condition and the indexing to idx instead curr
        // change curr in the fetch to correlate to the indexing of the data(starts at 0)?
        // use curr as the end conditon for the loop, decrement idx instead
        let arr = [];
        let curr = idx - 6;
        while(curr + 1 < idx) {
            const newData = data[curr];
            if(newData){
                newData.index = curr + 1;
                arr.push(newData);
                curr++;
            }else {
                break
            }
        }
        return arr;
    }

    renderNextFive = () => {
        return this.state.nextFive.map(item => <h2>{item.index + 1}. {item.name} - {item.count * 20}x</h2>)
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

    isRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to="/search" />
        }
    }

    render() {
        
        return(
            this.state.redirect ? this.isRedirect() : 
            this.state.loading ? <Loading /> :
            <>
                <h1>Results!</h1>
                {this.renderPrevFive()}
                <h2>{this.state.user.index}. {this.state.user.name} - {this.state.user.count * 20}x</h2>
                {this.renderNextFive()}
            </> 
        )
    }
}

export default Result;
