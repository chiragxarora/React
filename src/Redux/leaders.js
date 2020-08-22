import { LEADERS } from '../shared/leaders';
import { LEADERS_LOADING, LEADERS_FAILED, ADD_LEADERS } from './ActionTypes';

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case LEADERS_LOADING :
            return {...state, isLoading: true, errMess: null, leaders: []}
        case LEADERS_FAILED :
            return {...state, isLoading: false, errMess: action.payload , leaders: []}
        case ADD_LEADERS :
            return {...state, isLoading: false, errMess: null, leaders: action.payload}
        default:
          return state;
      }
};