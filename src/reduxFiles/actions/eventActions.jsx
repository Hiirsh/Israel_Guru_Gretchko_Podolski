import {getEvents} from '../../firebaseFiles/services/eventsService';

export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const addEventAction = event => ({
    type: ADD_EVENT,
    payload: event,
});

export const removeEventAction = event => ({
    type: REMOVE_EVENT,
    payload: event,
});

export const getEventsAction = () => {
    return dispatch => {
        getEvents().then(data =>
            data.forEach(event => dispatch(addEventAction(event)))
        );
    };
};
