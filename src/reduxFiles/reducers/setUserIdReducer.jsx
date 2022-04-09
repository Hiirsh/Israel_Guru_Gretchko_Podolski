import {USER_ID} from '../actions/setUserIdAction';

export const setUserIdReducer = (userId = '', action) => {
    switch (action.type) {
        case USER_ID:
            return action.payload;
        default:
            return userId;
    }
};
