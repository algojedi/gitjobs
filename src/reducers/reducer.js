import {
  SUBMIT_LANG,
  LOADING_JOBS,
  LOADED_JOBS_FAIL,
  LOADED_JOBS_SUCCESS
} from "../actions/actions";
import {
  LOADING_JOB,
  LOADED_JOB_FAIL,
  LOADED_JOB_SUCCESS
} from "../actions/actions";


const INITIAL_STATE_POSTINGS = { postings : [{ title: 'i am a temp job'}] };
const INITIAL_STATE_SEARCHFIELD  = { language: '' };
const INIT_STATE_DETAIL = { details: [], isPending: false }


export const searchReducer = (state=INITIAL_STATE_SEARCHFIELD, action) => {
    switch (action.type) {
        case SUBMIT_LANG:
            return { language: action.payload };
        
        default: return state
    }
}
export const detailReducer = (state=INIT_STATE_DETAIL, action) => {
    switch (action.type) {
          
        case LOADING_JOB:
            return { ...state, isPending: true }
        case LOADED_JOB_FAIL:
            return { ...state, isPending: false }
        case LOADED_JOB_SUCCESS:
            return { details: action.payload, isPending: false }     
        default:
            return state;
    }
}

export const postingsReducer = (state=INITIAL_STATE_POSTINGS, action) => {
    switch (action.type) {
          
        case LOADING_JOBS:
            return { ...state, isPending: true }
        case LOADED_JOBS_FAIL:
            return { ...state, isPending: false }
        case LOADED_JOBS_SUCCESS:
            console.log('success when loading!');
            return { postings: action.payload, isPending: false }     
        default:
            return state;
    }
}

//export default mainReducer;