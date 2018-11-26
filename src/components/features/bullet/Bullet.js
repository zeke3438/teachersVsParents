import React, { Component } from 'react';
//import store from '../../../config/Store';

import { FPS, BULLET_VELOCITY, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';

class Bullet extends Component {
    constructor(props){
        super(props);
        this.deleted = false;
        this.state = {
            ...this.props,
            time: {
                then: Date.now()
            },
            baseStyle: {
                position: 'absolute',
                left: this.props.pos[0],
                top: this.props.pos[1],
                width: '20px',
                height: '20px',
                backgroundColor: 'green',
                borderRadius: '50%'
            }
        }
    }

    componentDidMount() {
        requestAnimationFrame(() => {this.tick()});
    }

    tick() {
        let { then } = this.state.time
        let now = Date.now();

        const delta = now - then;
        const interval = 1000/FPS;  
        if (delta > interval && !this.deleted) {
            this.update();
            this.setState({
                time: { then: now }
            });
        }
        // Next frame
        this.checkOutOfBounds()
        requestAnimationFrame(() => {this.tick()});
    }

    update() {
        let { velocity , pos } = this.state
        let newPos = [pos[0] + velocity[0] * BULLET_VELOCITY, pos[1] + velocity[1] * BULLET_VELOCITY]
        this.setState({
            pos: newPos
        });
    }

    checkOutOfBounds() {
        const { pos } = this.state;
        this.deleted = !(0 <= pos[0] && pos[0] < MAP_WIDTH && 0 <= pos[1] && pos[1] < MAP_HEIGHT)
    }

    render(){
        const { baseStyle } = this.state
        const position = {
            left: this.state.pos[0],
            top: this.state.pos[1],
        };

        const style = { ...baseStyle, ...position};
        return <div style={style} />;
    }
    
}

export default Bullet;