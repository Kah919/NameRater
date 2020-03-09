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
        if(!this.props.formProps){
            this.setState({redirect: true})
        } else {
            const params = this.props.formProps;
            let lower = params.name.toLowerCase()
            let normalized = lower.charAt(0).toUpperCase() + lower.slice(1)
            fetch(`http://localhost:5000/api/names/${params.sex}`)
                .then(res => res.json())
                .then(data => {
                    const person = this.createPerson(data, normalized)
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
                    alert(`Congratulations! Your name ${this.props.formProps.name} is super rare and has not been updated in our database yet! Redirecting back to home page...`);
                    this.setState({
                        redirect: true
                    })
                })
        }
            
    }

    createPerson = (data, normalized) => {
        const person = data.find(info => info.name === normalized)
        person.index = data.findIndex(ele => ele.name === normalized) + 1
        return person
    }

    renderPrevFive = () => {
            return this.state.prevFive.map(item => <div className={`prev_name_list_item_${item.index}`} key={`${item.name}${item.index}`}>{item.index}. {item.name} - {item.count * 20}x</div>)
    }

    prevFive = (data, idx) => {
        let arr = [];
        let counter = 5;
        let newIdx = idx - 2
    
        while(counter && data[newIdx]) {
            const newData = data[newIdx];
            newData.index = newIdx + 1;
            arr.unshift(newData);
            counter--;
            newIdx--;
        }

        return arr;
    }

    renderNextFive = () => {
        return this.state.nextFive.map(item => <div className={`next_name_list_item_${item.index}`} key={`${item.name}${item.index}`}>{item.index + 1}. {item.name} - {item.count * 20}x</div>)
    }

    nextFive = (data, idx) => {
        let arr = [];
        let counter = 5;
        let newIdx = idx
    
        while(counter && data[newIdx]) {
            const newData = data[newIdx];
            newData.index = newIdx;
            arr.push(newData);
            counter--;
            newIdx++
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
            <div>
                <div className="user_header">👑{this.state.user.index}. {this.state.user.name}</div>
                {this.renderPrevFive()}
                <div className="user_name_list_item">{this.state.user.index}. {this.state.user.name} - {this.state.user.count * 20}x</div>
                {this.renderNextFive()}

            </div> 
        )
    }
}

export default Result;
