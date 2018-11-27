import store from '../../../config/Store';
const initialState = {
    mapPosition: [0,0],
    screenPosition: [0.0]
};

const targetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TARGET_MOVE':
            return {
                ...state,
                mapPosition: action.payload.map,
                screenPosition: action.payload.screen
            }
        default:
            return state
    }
};

export const targetMove = (positions) => {
    store.dispatch({
        type: 'TARGET_MOVE',
        payload: positions
    });
}

export default targetReducer;