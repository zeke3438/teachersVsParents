import store from '../../../config/Store';

const initialState = {
    position: [0,0]
};

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLAYER_MOVE':
            return {
                position: action.payload
            }
        default:
            return state
    }
};

export const playerMove = (direction) => {
    store.dispatch({
        type: 'PLAYER_MOVE',
        payload: direction
    });
}

export default playerReducer;