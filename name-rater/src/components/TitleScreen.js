import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TitleScreen extends Component {

    render() {
        return (
            <div>
                <h1> Name Rater </h1>
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