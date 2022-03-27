import {combineReducers} from 'redux';
import {pageStateReduser} from './changePageStateReducer';
import {eventsReducer} from './eventReducer';
import {guidesReducer} from './guidesReducer';

export const rootReducer = combineReducers({
    events: eventsReducer,
    guides: guidesReducer,
    pageState: pageStateReduser,
});
