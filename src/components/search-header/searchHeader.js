import React, { useState } from 'react';
import './searchHeader.css';
import { useHistory } from "react-router-dom";
import { changeLanguage, requestJobs } from '../../actions/actions'
import { connect } from 'react-redux'


const SearchHeader = ({dispatch}) => {
    let history = useHistory();    
    const [ language, setLanguage ] = useState('');

    const handleChange = (e) => {
        setLanguage(e.target.value);
    }
    return ( 
        <div className="search-container">
            <input  className='user-input form-control'
                    value={language} 
                    type='text' 
                    onChange={handleChange} />
            <button className='search-btn btn btn-light' 
                    onClick={() => {    dispatch(changeLanguage(language));  
                                        dispatch(requestJobs());
                                        console.log('dispatched job request');
                                    }}  
                    type='submit'>Search</button>
        </div>
    );
}
 
export default connect()(SearchHeader);

// *************{ history.push("/position"); ************

// class SearchHeader extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { input: '' }

//     }
    
//     handleClick = e => {
//         e.preventDefault();
//         this.props.dispatch(addTodo(this.state.input));
//         this.setState({ input: '' });
        
//     }
//     handleChange = e => {
//         e.preventDefault();
//         this.setState({ input: e.target.value });
        
//     }
//     render() { 
//         return ( 
//             <div className='title'>
//                 <h1>Todo List</h1>
//                 <div className="header">
//                     <Input  className='todo-item'
//                             type='text' 
//                             value={this.state.input} 
//                             onChange={this.handleChange} 
//                             placeholder='enter here' />
//                     <Button className='todo-item'
//                             color='primary' 
//                             onClick={this.handleClick} >Submit
//                     </Button>
//                 </div>
//             </div>
//          );
//     }
// }

// export default connect()(Header);