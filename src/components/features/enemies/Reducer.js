import store from '../../../config/Store'

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
                enemies: state.enemies.map(enemy => {
                    enemy.spriteLocation[0] = (enemy.spriteLocation[0] + 1) % 3
                    if (enemy.id === action.payload.id) {
                        enemy.pos = action.payload.position
                    }

                    return enemy
                })
            }
        default:
            return state
    }
}

export const enemyAdd = (enemy) => {
    store.dispatch({
        type: 'ENEMY_ADD',
        payload: { ...enemy, spriteLocation: [0,0] }
    })
}

export const enemyMove = (id, position) => {
    store.dispatch({
        type: 'ENEMY_MOVE',
        payload: {id, position}
    });
}

export const enemyDelete = (id) => {
    store.dispatch({
        type: 'ENEMY_DELETE',
        payload: id
    })
}

export default enemiesReducer