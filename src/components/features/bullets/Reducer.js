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
        case 'BULLET_REMOVE':
            return {
                ...state,
                bullets: state.bullets.filter(bullet =>  
                    action.payload.includes(bullet.id)
                )
            }
        case 'BULLET_CLEAN':
            return {
                ...state,
                bullets: state.bullets.filter(bullet => !bullet.deleted)
            }
        default:
            return state
    }
}

export const bulletAdd = (bullet) => {
    store.dispatch({
        type: 'BULLET_ADD',
        payload: { ...bullet, deleted: false }
    })
}

export const bulletRemove = (bullets) => {
    store.dispatch({
        type: 'BULLET_REMOVE',
        payload: bullets
    })
}

export const bulletClean = () => {
    store.dispatch({
        type: 'BULLET_CLEAN'
    })
}

export default bulletsReducer