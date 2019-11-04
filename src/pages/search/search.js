import React from 'react';
import './search.css';
import SearchHeader from '../../components/search-header/searchHeader';
import JobList from '../../components/job-list/jobList';
// import { addTodo } from "../../actions/actions";
// import { connect } from 'react-redux';

const Search = () => {
    return (
    <div>
        <SearchHeader/>
        <JobList/>
    </div>
    )
}
 
export default Search;