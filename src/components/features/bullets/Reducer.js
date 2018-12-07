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
        case 'BULLET_CLEAN':

            // if (action.payload.length > 0) {
            //     console.log('buulets', state.bullets)
            //     console.log('request to delete', action.payload)
            // } 

            return {
                ...state,
                bullets: state.bullets.filter(bullet => !action.payload.includes(bullet.id))
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

export const bulletClean = (data) => {
    store.dispatch({
        type: 'BULLET_CLEAN',
        payload: data
    })
}

export default bulletsReducer