import {LOG_OUT, SIGN_IN} from '../actions/isSignedAction';

const initialState = {
    isSignedIn: true,
};

export const isSignedReducer = (signedInState = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...signedInState, isSignedIn: true};
        case LOG_OUT:
            return {...signedInState, isSignedIn: false};
        default:
            return signedInState;
    }
};
