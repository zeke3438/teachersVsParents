import store from '../../../config/Store'
import { SPRITE_SIZE } from '../../../config/constants';

const initialState = {
    enemies: []
}

const enemiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ENEMY_ADD':
            return {
                ...state,
                enemies: state.enemies.concat(action.payload)
            }
        case 'ENEMY_DELETE':
            return {
                ...state,
                enemies: state.enemies.filter(enemy => action.payload !== enemy.id)
            }
        case 'ENEMY_MOVE':
            return {
                ...state,
                position: action.payload
            }
        case 'ENEMY_TO':
            state.spriteLocation[1] = action.payload * SPRITE_SIZE
            return {
                ...state,
            }
        default:
            return state
    }
}

export const enemyAdd = (enemy) => {
    store.dispatch({
        type: 'ENEMY_ADD',
        payload: { ...enemy }
    })
}

export const enemyMove = (direction) => {
    store.dispatch({
        type: 'ENEMY_MOVE',
        payload: direction
    });
}

export const enemyDelete = (id) => {
    store.dispatch({
        type: 'ENEMY_DELETE',
        payload: id
    })
}

export default enemiesReducer