import store from '../../../config/Store'
import { MAP_WIDTH, MAP_HEIGHT } from '../../../config/constants'

const initialState = {
    bullets: [],
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
                bullets: action.payload.filter(bullet => outOfBounds(bullet) )
            }
        default:
            return state
    }
}

const outOfBounds = (bullet) => {
    const verticalLimits = 0 <= bullet.y && bullet.y <= MAP_HEIGHT
    const horizontalLimits = 0 <= bullet.x && bullet.x <= MAP_WIDTH
    return horizontalLimits && verticalLimits
}

export const bulletAdd = (bullet) => {
    store.dispatch({
        type: 'BULLET_ADD',
        payload: { ...bullet }
    })
}

export const bulletsUpdate = (value) => {
    store.dispatch({
        type: 'BULLET_UPDATE',
        payload: value
    })
}

export default bulletsReducer