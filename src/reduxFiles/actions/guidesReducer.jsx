export const ADD_GUIDE = 'ADD_EVENT';
export const REMOVE_GUIDE = 'REMOVE_GUIDE';

export const addGuide = event => ({
    type: ADD_GUIDE,
    payload: event,
});

export const removeGuide = event => ({
    type: REMOVE_GUIDE,
    payload: event,
});
