import React from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';


import Player from '../player/Player'
import Target from '../target/Target'
import Map from '../map/Map'

class World extends React.Component {
    constructor() {
        super();
        this.state = {
            fps: 1,
            now: 0,
            then: Date.now()
        }
        this.bullets = [];
    }
    componentDidMount() {
        requestAnimationFrame(() => {this.update()});
    }

    update() {
        this.setState({
            now: Date.now()
        });
        const delta = this.state.now - this.state.then;
        const interval = 1000/this.state.fps;
        if (delta > interval) {
            console.log("tick"); 
            this.setState({
                then: this.state.now - (delta % interval)
            });
        }
        // Next frame
        requestAnimationFrame(() => {this.update()});
    }

    render() {
        return (<div style={{
            margin: '0 auto',
            position: 'relative',
            width: MAP_WIDTH+'px',
            height: MAP_HEIGHT+'px'
        }}>
            <Map />
            <Player />
            <Target />
        </div>);
    }
}

export default World;