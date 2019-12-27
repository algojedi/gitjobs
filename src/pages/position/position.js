import React from 'react';
import './position.css';
import { connect } from 'react-redux';

const Position = ({dispatch, details}) => {
    return ( 
        <div>
            <div>Welcome to the Position</div>
            <div>
            {details.title}
            </div>
        </div>
     );
}
 
const mapStatetoProps = (state) => {
    return { details: state.detailReducer.details }
}

export default connect(mapStatetoProps)(Position);