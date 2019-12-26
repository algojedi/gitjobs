import { SUBMIT_LANG, LOADING_JOBS, LOADED_JOBS_FAIL, LOADED_JOBS_SUCCESS} from "../actions/actions";


const INITIAL_STATE_POSTINGS = { postings : [{ title: 'i am a temp job'}] };
const INITIAL_STATE_SEARCHFIELD  = { language: '' };



export const searchReducer = (state=INITIAL_STATE_SEARCHFIELD, action) => {
    switch (action.type) {
        case SUBMIT_LANG:
            return { language: action.payload };
                    
        default: return state;
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
            return { postings: action.payload, language: state.language, isPending: false }     
        default:
            return state;
    }
}

//export default mainReducer;