import {combineReducers} from 'redux';
import {pageStateReduser} from './changePageStateReducer';
import {eventsReducer} from './eventReducer';
import {guidesReducer} from './guidesReducer';
import {isSignedReducer} from './isSignedRegucer';
import {setCurrentEventReducer} from './setCurrentEventReducer';
import {setUserIdReducer} from './setUserIdReducer';

export const rootReducer = combineReducers({
    events: eventsReducer,
    guides: guidesReducer,
    pageState: pageStateReduser,
    isSignedIn: isSignedReducer,
    userId: setUserIdReducer,
    currentEventId: setCurrentEventReducer,
});
