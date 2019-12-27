import React from 'react';
import { Link } from 'react-router-dom';
import { jobSelected } from '../../actions/actions'
import { connect } from "react-redux";


const JobPosting = ({jobinfo, dispatch}) => {
    //console.log('props in job posting comp ', jobinfo.title);
    //console.log(jobinfo.id);
    return (
      <div className="job-title">
        <Link
        
          onClick={() => dispatch(jobSelected(jobinfo.id))}
          style={{ textDecoration: "none" }}
          to="/position"
        >
          {jobinfo.title}
        </Link>
      </div>
    );
}
 
export default connect()(JobPosting)