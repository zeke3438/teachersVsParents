import store from '../../../config/Store';

const initialState = {
    hover: false,
};

const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MAP_HOVER':
            return {
                ...state,
                hover: action.payload
            }
        default:
            return state
    }
};

export const SetMapHover = value => { store.dispatch({ type: 'MAP_HOVER', payload: value }) }

export default mapReducer;
