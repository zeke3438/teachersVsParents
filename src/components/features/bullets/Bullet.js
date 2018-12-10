import React, { Component } from 'react'
import { BULLET_VELOCITY, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants'
import { bulletDelete } from './Reducer'

class Bullet extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseStyle: {
                position: 'absolute',
                width: '20px',
                height: '20px',
                backgroundColor: '#1E3244',
                borderRadius: '50%'
            },
            deleted: false,
            x: props.pos[0],
            y: props.pos[1]
        }
    }

    update() {
        let offset = this.props.id
        let x = this.props.pos[0] + this.props.dir[0] * BULLET_VELOCITY * ((this.props.clock - offset)/1000)
        let y = this.props.pos[1] + this.props.dir[1] * BULLET_VELOCITY * ((this.props.clock - offset)/1000)
        this.setState({
            deleted: !(0 <= x && x <= MAP_WIDTH && 0 <= y && y <= MAP_HEIGHT),
            x: x,
            y: y
        })
        if (this.state.deleted) bulletDelete(this.props.id)
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

export default Bullet;