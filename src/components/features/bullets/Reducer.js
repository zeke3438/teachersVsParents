import store from '../../../config/Store'

const initialState = {
    bullets: [],
    bulletsOutOfBounds: false
}

const bulletsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BULLET_ADD':
            return {
                ...state,
                bullets: state.bullets.concat(action.payload)
            }
        case 'BULLET_UPDATE':
            return {
                ...state,
                // bullets: updatedBullets
            }
        default:
            return state
    }
}

export const bulletAdd = (bullet) => {
    store.dispatch({
        type: 'BULLET_ADD',
        payload: bullet
    })
}

export const bulletsUpdate = (delta) => {
    store.dispatch({
        type: 'BULLET_UPDATE',
        payload: delta
    })
}


export default bulletsReducer