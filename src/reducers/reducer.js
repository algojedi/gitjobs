import { SEARCH_JOBS} from "../actions/actions";


const INITIAL_STATE = { postings : [], language: '' };

function mainReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_JOBS:
            return INITIAL_STATE;
        
        
            
        case TOGGLE_TODO:  
            let completed;
            const newState = state.map(el => { 
                if (el.id === action.index) {
                    completed = !el.completed; 
                    } else { completed = el.completed; }

                return {    todo: el.todo,
                            completed, 
                            id : el.id
                        }
                });
            return newState;    
                            
        default:
            return state;
    }
}

export default mainReducer;