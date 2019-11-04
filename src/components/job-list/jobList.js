import React from 'react';
import JobPosting from '../job-posting/jobPosting';



const JobList = () => {
    const randoLists = ['some job', 'another job'];
    return ( 
        randoLists.map(job => <div><JobPosting jobinfo={job} /></div>)
     );
}

export default JobList;

