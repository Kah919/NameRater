import React, { Component } from 'react';
import { render } from 'react-dom';

class ResultListItem extends Component {
    state = {
        names: [], 
        currIdx: 0,
        preIdx: 0,
        nextIdx: 5,
    }

    componentDidMount() {
        this.setState({
            names: this.props.names,
            currIdx: this.props.userIdx
        })
    }

    renderNames = () => {
        if(this.state.names.length > 0) {
            const test = this.state.names.slice(this.state.preIdx, this.state.preIdx + 5);
                    
            if(this.props.lower) {
                test.reverse();
            }

            let count = this.state.currIdx
            
            return test.map(name => {
                count++;
                return <li key={`${name.name}${name.index}`}> { count }. { name.name } - {name.count * 20}x </li >
            })
        }
    }

    handlePrev = () => {
        // ToDo: will need to handle edge case when preIdx isn't a multiple of 5 and is 5 > 
        console.log("Action performed: HandlePrev(), currentIndex: " + this.state.currIdx)
        if(this.state.preIdx !== 0) {
            let newPreIdx = this.state.preIdx - 5
            // let currIdx = this.state.currIdx - 5 //here
            let currIdx = this.props.lower ? this.state.currIdx + 5 : this.state.currIdx - 5
            this.setState({
                preIdx: newPreIdx,
                currIdx,
            })
        }
    }

    handleNext = () => {
        // ToDo: will need to handle edge case when this.state.preIdx + 5 is larger than size of the array
        console.log("Action performed: HandleNext(), currentIndex: " + this.state.currIdx)
        let newPreIdx = this.state.preIdx + 5
        // let currIdx = this.state.currIdx + 5 //here 
        let currIdx = this.props.lower ? this.state.currIdx - 5 : this.state.currIdx + 5
        this.setState({
            preIdx: newPreIdx,
            currIdx,
        })
    }

    createButton = () => {
        return(
            <div>
                <button onClick={ this.props.lower ? this.handleNext : this.handlePrev }> prev </button>
                <button onClick={ this.props.lower ? this.handlePrev : this.handleNext }> next </button>
            </div>
        )
    }

    render() {
        console.log("here", this.props)
        return(
            <div className='results_list_container'>
                { this.props.lower ? this.createButton() : null }
                { this.state.names.length > 0 ? this.renderNames() : null }
                { this.props.lower ? null : this.createButton() }
            </div>
        )
    }
}

export default ResultListItem;