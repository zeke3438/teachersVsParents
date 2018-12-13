import store from '../../../config/Store'
import { MAP_WIDTH, MAP_HEIGHT } from '../../../config/constants'

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
        case 'ENEMY_HIT':
            return {
                ...state,
                enemies: state.enemies.map(enemy => { 
                    if(Math.hypot(enemy.pos[0] - action.payload.x, enemy.pos[1] - action.payload.y) < 16)
                        enemy.beaten = true
                    return enemy
                })
            }
        case 'ENEMY_UPDATE':
            return {
                ...state,
                enemies: action.payload
            }
        default:
            return state
    }
}

const outOfBounds = (enemies) => {
    enemies =  enemies.filter(enemy => {
        const pos = enemy.pos
        const verticalLimits = 0 <= pos[1] && pos[1] <= MAP_HEIGHT
        const horizontalLimits = 0 <= pos[0] && pos[0] <= MAP_WIDTH

        if(!(horizontalLimits && verticalLimits)) console.log(enemies)

        return horizontalLimits && verticalLimits
    })

    return enemies
}

export const enemyAdd = (enemy) => { store.dispatch({ type: 'ENEMY_ADD', payload: { ...enemy, beaten:false, spriteLocation: [0,0] } }) }

export const enemyUpdate = value => { 

    
    const lalala = outOfBounds(value)

    store.dispatch({ 
        type: 'ENEMY_UPDATE', 
        payload: lalala
    }) 


}

export const hit = value => { store.dispatch({ type: 'ENEMY_HIT', payload: value }) }

export default enemiesReducer