import React, { Component } from 'react'
import { BULLET_VELOCITY, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants'

class Bullet extends Component {
    constructor(props){
        super(props);
        this.position = props.pos
        this.timeOffset = props.clock
        this.state = {
            baseStyle: {
                position: 'absolute',
                width: '20px',
                height: '20px',
                backgroundColor: '#1E3244',
                borderRadius: '50%'
            }
        }
        this.deleted = false
    }

    newPosition() {
        let x = this.position[0] + this.props.dir[0] * BULLET_VELOCITY * ((this.props.clock - this.timeOffset)/1000)
        let y = this.position[1] + this.props.dir[1] * BULLET_VELOCITY * ((this.props.clock - this.timeOffset)/1000)

        if(!(0 <= x && x <= MAP_WIDTH && 0 <= y && y <= MAP_HEIGHT) ){
            this.props.deleteBullet(this.props.id);
            this.deleted = true
        }
            
        return {
            left: x,
            top: y,
        };
    }

    render(){
        if (this.deleted) return null

        const { baseStyle } = this.state
        const position = this.newPosition()

        const style = { ...baseStyle, ...position};
        return <div style={style} />;
    }
}

export default Bullet;