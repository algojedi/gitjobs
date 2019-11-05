import { SEARCH_JOBS} from "../actions/actions";


const INITIAL_STATE = { postings : [{ title: 'i am a temp job'}], language: '' };

function mainReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_JOBS:
            return { postings: [], language: action.payload };
          
                            
        default:
            return state;
    }
}

export default mainReducer;