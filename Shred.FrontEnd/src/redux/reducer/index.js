import {combineReducers} from 'redux';
import reducer from './reducer'


const appReducer = combineReducers({
    reducer,
});

const rootReducer = (state, action) => appReducer (state, action)

export default rootReducer;