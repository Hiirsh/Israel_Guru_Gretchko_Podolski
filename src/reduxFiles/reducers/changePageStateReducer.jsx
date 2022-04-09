import {CHANGE_EVENTS_LIST} from '../actions/changePageStateAction';

// export const initialState = {
//     eventListCollapced: true,
// };

export const pageStateReduser = (pageState = true, action) => {
    switch (action.type) {
        case CHANGE_EVENTS_LIST:
            let temp = !pageState.eventListCollapced;
            return {...pageState, eventListCollapced: temp};
        default:
            return pageState;
    }
};
