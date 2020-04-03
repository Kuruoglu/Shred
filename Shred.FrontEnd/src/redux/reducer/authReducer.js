import ACTION from '../action/actionTypes';

const initialState = {
    user: {},
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_REQUEST:
            return {
                ...state,
                error: null
            };
        case ACTION.LOGIN_RESPONS:
            return {
                ...state,
                user: action.authData.user,
            };
        case ACTION.LOGIN_ERROR:
            return {
                ...state,
                error: action.message,
            };
        default: return state;

    }
}