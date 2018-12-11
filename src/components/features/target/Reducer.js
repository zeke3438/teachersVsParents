import store from '../../../config/Store';
const initialState = {
    mapPosition: [0,0],
    screenPosition: {x: 0, y: 0},
    insideMap: false
};

const targetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TARGET_MOVE':
            return {
                ...state,
                screenPosition: action.payload.screen,
                insideMap: action.payload.insideMap
            }
        default:
            return state
    }
};

export const targetMove = (screen) => {

    const mapBounds = store.getState().map.bounds
    let horizontalBounds = mapBounds.x <= screen.x && screen.x <= mapBounds.x + mapBounds.width
    let verticalBounds = mapBounds.y <= screen.y && screen.y <= mapBounds.y + mapBounds.height
    const insideMap = (horizontalBounds && verticalBounds)

    store.dispatch({
        type: 'TARGET_MOVE',
        payload: { screen, insideMap }
    });
}

export default targetReducer;