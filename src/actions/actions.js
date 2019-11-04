//action types too few to warrant seperate file
export const SEARCH_JOBS = 'SEARCH_JOBS'

//let id = 0;

//action creators returning actions
export function searchJobs(lang) {
    return {
        type: SEARCH_JOBS,
        payload: lang
    }
} 



