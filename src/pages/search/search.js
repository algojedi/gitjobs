import React from 'react';
import './search.css';
import SearchHeader from '../../components/search-header/searchHeader';
import JobList from '../../components/job-list/jobList';


const Search = () => {
    return (
    <div>
        <SearchHeader/>
        <JobList/>
    </div>
    )
}
 
export default Search;