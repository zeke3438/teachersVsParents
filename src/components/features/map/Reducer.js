import store from '../../../config/Store';

const initialState = {
    hover: false,
    bounds: {x: 0, y: 0, width: 0 , heigth: 0}
};

const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MAP_HOVER':
            return {
                ...state,
                hover: action.payload
            }
        case 'MAP_BOUNDS_SET':
            return {
                ...state,
                bounds: action.payload
            }
        default:
            return state
    }
};

export const SetMapHover = value => { store.dispatch({ type: 'MAP_HOVER', payload: value }) }

export const SetMapBounds = value => { store.dispatch({ type: 'MAP_BOUNDS_SET', payload: value }) }

export default mapReducer;
