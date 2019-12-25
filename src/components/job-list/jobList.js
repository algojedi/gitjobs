import React from 'react';
import JobPosting from '../job-posting/jobPosting';
import { connect } from 'react-redux'

const JobList = (props) => {
        // console.log('props are ', props);
        return ( 
            <div>
                <p>job listed!</p>
    {props.postings.map((job, index) => <JobPosting key={index} jobinfo={job} />)}
                    
            </div>

         );
}

const mapStateToProps = state => ({ postings: state.postings })

export default connect(mapStateToProps)(JobList);



// const JobList = () => {
    
//     const randoLists = ['some job', 'another job'];
//     return ( 
//         randoLists.map(job => <div><JobPosting jobinfo={job} /></div>)
//      );
// }

// export default JobList;

