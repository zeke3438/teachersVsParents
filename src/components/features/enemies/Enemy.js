import React, { Component } from 'react'
import store from '../../../config/Store'
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants'

import walkSprite from './enemy.png';
import bambooSprite from '../bullets/bullet.png';

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
            bambooStyle: {
                backgroundImage: `url('${bambooSprite}')`,
                width: SPRITE_SIZE + 'px',
                height: SPRITE_SIZE + 'px',
                backgroundRepeatX: 'no-repeat',
                backgroundRepeatY: 'no-repeat',
                rigth: '0',

            },
            lastClock: 0,
            lastDirection: [0, 0],
            x: props.pos[0],
            y: props.pos[1]
        }
    }

    update(enemy) {
        this.moveTo(enemy, this.getDirection(enemy))
    }

    moveTo(current, direction) {
        const currentPosition = current.pos;
        let position = [currentPosition[0] + (direction[0]*SPRITE_SIZE),currentPosition[1] + (direction[1]*SPRITE_SIZE)]
        if(this.shouldMove() && !this.takenPosition(position)) {
            if(!current.beaten) position = this.observeBoundaries(currentPosition, position)
            this.setState({
                lastClock: this.props.clock,
                beaten: current.beaten,
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

    takenPosition(position) {
        let current = store.getState().enemies.enemies.map(enemy => {return enemy.pos})
        let taken = current.findIndex(currentPosition => { return currentPosition[0] === position[0] && currentPosition[1] === position[1] })
        return taken > -1
    }

    observeBoundaries(oldPos, newPos) {
        return ( 0 <= newPos[0] && newPos[0] < MAP_WIDTH && 
             0 <= newPos[1] && newPos[1] < MAP_HEIGHT) ?
            newPos : oldPos;
    }

    getDirection(current) {
        const playerPos = store.getState().player.position
        const moveX = [ current.pos[0] < playerPos[0] ? 1 : -1, 0 ]
        const moveY = [ 0, current.pos[1] < playerPos[1] ? 1 : -1 ]
        if (this.touchPLayer(current, playerPos)) return [0, 0]
        if (current.beaten) return [-1, 0]
        return Math.random() < .5? moveX : moveY
    }

    touchPLayer(current, playerPos) {
        return current.pos[0] === playerPos[0] && current.pos[1] === playerPos[1]
    }

    newPosition() {
        return { left: this.state.x, top: this.state.y, backgroundPosition: (this.props.spriteLocation[0] * SPRITE_SIZE) + 'px ' + (this.props.spriteLocation[1] * SPRITE_SIZE) + 'px',}
    }

    render(){
        if (this.deleted) return null
        const { baseStyle } = this.state
        const position = this.newPosition()
        const style = { ...baseStyle, ...position};
        const bamboo = this.state.beaten ? this.state.bambooStyle : null
        return <div style={style}><div style={bamboo}></div></div> ;
    }
}

export default Enemy;