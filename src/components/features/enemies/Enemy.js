import React, { Component } from 'react'
import store from '../../../config/Store';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants'
import { enemyDelete,  enemyMove } from './Reducer'


class Enemy extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseStyle: {
                position: 'absolute',
                width: '32px',
                height: '32px',
                backgroundColor: '#FFFFFF',
            },
            deleted: false,
            x: props.pos[0],
            y: props.pos[1]
        }
    }

    update() {
        this.moveTo(this.getDirection())
        if (this.state.deleted) enemyDelete(this.props.id)
    }

    moveTo(direction) {
        // const currentPosition = store.getState().enemy.position;
        // const newPosition = [currentPosition[0] + direction[0],currentPosition[1] + direction[1]]

        // enemyMove(this.observeBoundaries(currentPosition, newPosition))
    }

    observeBoundaries(oldPos, newPos) {
        return ( 0 <= newPos[0] && newPos[0] < MAP_WIDTH &&
             0 <= newPos[1] && newPos[1] < MAP_HEIGHT) 
             ? newPos : oldPos;
    }

    getDirection() {
        switch (Math.floor(Math.random() * 3)) {
            case 0: // LEFT ARROW
                //faceToWest()
                return [-1 * SPRITE_SIZE,  0];
            case 1: // UP ARROW
                //faceToNorth()
                return [ 0, -1 * SPRITE_SIZE];
            case 2: // RIGHT ARROW
                //faceToEast()
                return [ 1 * SPRITE_SIZE,  0];
            case 3: // DOWN ARROW
                //faceToSouth()
                return [ 0,  1 * SPRITE_SIZE];
            default:
                return [0, 0];
        }
    }

    newPosition() {
        return { left: this.state.x, top: this.state.y, };
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