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
                mapPosition: action.payload.positions.map,
                screenPosition: action.payload.positions.screen,
                insideMap: action.payload.insideMap
            }
        default:
            return state
    }
};

export const targetMove = (positions) => {

    const mapBounds = store.getState().map.bounds
    const point = positions.screen
    let horizontalBounds = mapBounds.x <= point.x && point.x <= mapBounds.x + mapBounds.width
    let verticalBounds = mapBounds.y <= point.y && point.y <= mapBounds.y + mapBounds.height
    const insideMap = (horizontalBounds && verticalBounds)

    store.dispatch({
        type: 'TARGET_MOVE',
        payload: { positions, insideMap }
    });
}

export default targetReducer;