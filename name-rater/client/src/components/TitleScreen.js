import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
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