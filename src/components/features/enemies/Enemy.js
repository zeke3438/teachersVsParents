import React, { Component } from 'react'
import store from '../../../config/Store'
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants'
import { enemyMove } from './Reducer'

import walkSprite from './enemy.png';

class Enemy extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseStyle: {
                position: 'absolute',
                width: SPRITE_SIZE + 'px',
                height: SPRITE_SIZE + 'px',
                backgroundImage: `url('${walkSprite}')`,
            },
            lastClock: 0,
            lastDirection: [0, 0],
            deleted: false,
            x: props.pos[0],
            y: props.pos[1]
        }
    }

    update(enemy) {
        this.moveTo(enemy, this.getDirection(enemy))
        // if (this.state.deleted) enemyDelete(this.props.id)
    }

    moveTo(current, direction) {
        if(this.shouldMove()) {
            const currentPosition = current.pos;
            const newPosition = [currentPosition[0] + (direction[0]*SPRITE_SIZE),currentPosition[1] + (direction[1]*SPRITE_SIZE)]
            const position = this.observeBoundaries(currentPosition, newPosition)
            enemyMove(this.props.id, position)
            this.setState({
                lastClock: this.props.clock,
                x: position[0],
                y: position[1]
            })
        }
    }

    shouldMove() {
        let clock = this.props.clock
        let delta = (Math.random() * 700) + 300 // from 300 to 1000
        return clock > this.state.lastClock + delta
    }

    observeBoundaries(oldPos, newPos) {
        return ( 0 <= newPos[0] && newPos[0] < MAP_WIDTH &&
             0 <= newPos[1] && newPos[1] < MAP_HEIGHT) 
             ? newPos : oldPos;
    }

    getDirection(current) {
        const playerPos = store.getState().player.position
        const moveX = [ current.pos[0] < playerPos[0] ? 1 : -1, 0 ]
        const moveY = [ 0, current.pos[1] < playerPos[1] ? 1 : -1 ]
        if (this.touchPLayer(current, playerPos)) return [0, 0]
        return Math.random() < .5? moveX : moveY
    }

    touchPLayer(current, playerPos) {
        return current.pos[0]===playerPos[0] && current.pos[1]===playerPos[1]
    }

    newPosition() {
        return { left: this.state.x, top: this.state.y, backgroundPosition: (this.props.spriteLocation[0] * SPRITE_SIZE) + 'px ' + (this.props.spriteLocation[1] * SPRITE_SIZE) + 'px',}
    }

    render(){
        if (this.deleted) return null
        const { baseStyle } = this.state
        const position = this.newPosition()

        const style = { ...baseStyle, ...position};
        return <div style={style} />;
    }
}

export default Enemy;