export const ADD_GUIDE = 'ADD_EVENT';
export const REMOVE_GUIDE = 'REMOVE_GUIDE';

export const addGuideAction = event => ({
    type: ADD_GUIDE,
    payload: event,
});

export const removeGuideAction = event => ({
    type: REMOVE_GUIDE,
    payload: event,
});
