import React, { Component } from 'react';
// Link is a method found in Browser Router that functions like an <a> tag
import { Link } from 'react-router-dom';

class TitleScreen extends Component {

    render() {
        return (
            <div>
                <h1> Name Rater </h1>
                {/* 'Link' here is wrapped around the button element has implied 'onClick' event tied to it; */}
                <Link to={'/search'}>
                    <button>
                        Press Start!
                    </button>
                </Link>
            </div>
        )
    }
}

export default TitleScreen