import {EVENT_ID} from '../actions/setCurrentEventAction';

export const setCurrentEventReducer = (eventId = '', action) => {
    switch (action.type) {
        case EVENT_ID:
            return action.payload;
        default:
            return eventId;
    }
};
