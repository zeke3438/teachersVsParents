import store from '../../../config/Store'

const initialState = {
    bullets: [],
    bulletsOutOfBounds: false
}

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
                bulletsOutOfBounds: true
            }
        case 'WORLD_BULLET_CHECKED':
            return {
                ...state,
                bulletsOutOfBounds: false
            }
        default:
            return state
    }
}


export const worldBulletAdd = (bullet) => {
    store.dispatch({
        type: 'WORLD_BULLET_ADD',
        payload: bullet
    })
}

export const worldBulletCheck = () => {
    store.dispatch({
        type: 'WORLD_BULLET_CHECK'
    })
}

export const worldBulletChecked = () => {
    store.dispatch({
        type: 'WORLD_BULLET_CHECKED'
    })
}

export default worldReducer
