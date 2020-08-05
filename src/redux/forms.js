export const InitialFeedback = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: ""
  };
  
/*
import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {
        errMess: null,
        comments: []
    }, action) =>{
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state, feedback: state.feedback.concat(feedback)};
        
        case ActionTypes.COMMENTS_FAILED:
            return{...state, errMess: action.payload, feedback: []};
         
        default:
            return state;
    }
}
*/