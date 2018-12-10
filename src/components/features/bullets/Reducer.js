import store from '../../../config/Store'

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
        case 'BULLET_DELETE':
            return {
                ...state,
                bullets: state.bullets.filter(bullet => action.payload !== bullet.id)
            }
        default:
            return state
    }
}

export const bulletAdd = (bullet) => {
    store.dispatch({
        type: 'BULLET_ADD',
        payload: { ...bullet }
    })
}

export const bulletDelete = (id) => {
    store.dispatch({
        type: 'BULLET_DELETE',
        payload: id
    })
}

export default bulletsReducer