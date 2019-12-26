//action types too few to warrant seperate file
export const SEARCH_JOBS = 'SEARCH_JOBS'
export const LOADING_JOBS = 'LOADING_JOBS'
export const LOADED_JOBS_SUCCESS = 'LOADED_JOBS_SUCCESS';
export const LOADED_JOBS_FAIL = 'LOADED_JOBS_FAIL';


//async action creators accept dispatch as parameter because of thunk
export const requestJobs = async (dispatch) => {
    dispatch({type: LOADING_JOBS});
    const resp = await fetch(`https://jobs.github.com/positions.json?description=python`);  
    resp.json().then(data => { dispatch({ type: LOADED_JOBS_SUCCESS, payload: data })})
        .catch(err => { dispatch({ type: LOADED_JOBS_FAIL, payload: err }) })
}

//action creators returning actions 
export function searchJobs(lang) {
    console.log('jobs being searched');
    
    return {
        type: SEARCH_JOBS,
        payload: lang
    }
} 



