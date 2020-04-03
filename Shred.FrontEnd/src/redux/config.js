import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducer';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function ConfigureStore() {
    const middleware = [
        sagaMiddleware,
    ]


    const store = createStore(combineReducers, compose(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga, store.dispatch);
    return store;
}