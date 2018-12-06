import store from '../../../config/Store';
import { SPRITE_SIZE } from '../../../config/constants';

const initialState = {
    position: [0,0],
    spriteLocation: [0 , 0],
    walkindex: 0
};

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLAYER_MOVE':
            state.walkindex = (state.walkindex + 1) % 3
            state.spriteLocation[0] = state.walkindex * SPRITE_SIZE
            return {
                ...state,
                position: action.payload
            }
        case 'PLAYER_TO':
            state.spriteLocation[1] = action.payload * SPRITE_SIZE
            return {
                ...state,
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

export const faceToNorth = () => {
    store.dispatch({
        type: 'PLAYER_TO',
        payload: 1
    });
}
export const faceToSouth = () => {
    store.dispatch({
        type: 'PLAYER_TO',
        payload: 0
    });
}
export const faceToWest = () => {
    store.dispatch({
        type: 'PLAYER_TO',
        payload: 3
    });
}
export const faceToEast = () => {
    store.dispatch({
        type: 'PLAYER_TO',
        payload: 2
    });
}
export default playerReducer;