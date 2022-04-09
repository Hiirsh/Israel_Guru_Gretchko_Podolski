import {SIGN_IN} from '../actions/isSignedAction';

export const isSignedReducer = (signedInState = false, action) => {
    switch (action.type) {
        case SIGN_IN:
            return action.payload;
        default:
            return signedInState;
    }
};
