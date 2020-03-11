import {createStore} from 'redux';
import combineReducers from './reducer';

export default function ConfigureStore() {
    const store = createStore(combineReducers)
    return store;
}