import {guidePhoto} from '../../utils/constants';
import {} from '../actions/eventActions';
import {ADD_GUIDE, REMOVE_GUIDE} from '../actions/guidesReducer';

export const initialState = {
    guides: [
        {
            firstName: 'Святослав',
            lastName: 'Волк',
            email: 'testmail@gmail.com',
            license: '111',
            phone: '12345678',
            photo: guidePhoto,
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
