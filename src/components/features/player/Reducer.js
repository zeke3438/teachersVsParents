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

export default playerReducer;