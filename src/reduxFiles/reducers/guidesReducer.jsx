import {} from '../actions/eventActions';
import {ADD_GUIDE, REMOVE_GUIDE} from '../actions/guidesReducer';

export const initialState = {
    guides: [
        {
            firstName: '',
            lastName: '',
            license: '',
            phone: '',
        },
    ],
};

export const guidesReducer = (guides = initialState, action) => {
    switch (action.type) {
        case ADD_GUIDE:
            return {...guides};
        case REMOVE_GUIDE:
            return {...guides};
        default:
            return guides;
    }
};
