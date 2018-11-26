const initialState = {
    bullets: []
};

const worldReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WORLD_BULLET_ADD':
            return {
                ...state,
                bullets: state.bullets.concat(action.payload)
            }
        case 'WORLD_BULLET_CHECK':
            return {
                ...state,
                bullets: state.bullets.map(item => !item.deleted)
            }
        default:
            return state
    }
};

export default worldReducer;