import {applyMiddleware, compose, createStore} from 'redux';
// import {logger} from 'redux-logger/src';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(/* logger, */ thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && //DEV
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
