import React from 'react';


const JobPosting = ({jobinfo}) => {
    //console.log('props in job posting comp ', jobinfo.title);
    return ( 
        <React.Fragment>
            {jobinfo.title}
        </React.Fragment>
     );
}
 
export default JobPosting;