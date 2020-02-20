import React from 'react';

export default (props) => {
    return(
        // <div>
        //     <select name='sex' onChange={this.props.handleDropDown}>
        //         <option value=''>--</option>
        //         <option value='male'>Boy</option>
        //         <option value='female'>Girl</option>
        //     </select> 
        // </div>
        <div>
            <h1 className="hover_arrow" data-gender="male" onClick={ props.handleGenderSelect }> Boy </h1>
            <h1 className="hover_arrow" data-gender="female" onClick={ props.handleGenderSelect }> Girl </h1>
        </div>
    )
}
