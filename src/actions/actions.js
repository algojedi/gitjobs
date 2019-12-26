//action types too few to warrant seperate file
export const SUBMIT_LANG = 'TEXT_JOBS'
export const LOADING_JOBS = 'LOADING_JOBS'
export const LOADED_JOBS_SUCCESS = 'LOADED_JOBS_SUCCESS';
export const LOADED_JOBS_FAIL = 'LOADED_JOBS_FAIL';


//async action creators accept dispatch as parameter because of thunk
//also, requestJobs needs to return a function for thunk in order for thunk to recognize
//that it needs dispatch passed to it
export const requestJobs = () => (dispatch) => {
    dispatch({type: LOADING_JOBS});
    fetch(`https://jobs.github.com/positions.json?description=python`)
    .then(resp => resp.json())
    .then(data => { dispatch({ type: LOADED_JOBS_SUCCESS, payload: data })})
        .catch(err => { dispatch({ type: LOADED_JOBS_FAIL, payload: err }) })
}

//action creators returning actions 

export const changeLanguage = (lang) => {
    console.log('changed language action created!');
    return {
        type: SUBMIT_LANG,
        payload: lang
    }
}



// export function searchJobs(lang) {
//     console.log('jobs being searched');
    
//     return {
//         type: SEARCH_JOBS,
//         payload: lang
//     }
// } 



