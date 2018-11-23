const initialState = {
    position: [0,0]
};

const targetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TARGET_MOVE':
            return {
                position: action.payload
            }
        default:
            return state
    }
};

export default targetReducer;