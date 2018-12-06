import React from 'react';
import store from '../../../config/Store';
import { bulletAdd } from '../bullets/Reducer';
import { MAP_HEIGHT, MAP_WIDTH, FPS } from '../../../config/constants';

import Player from '../player/Player'
import Target from '../target/Target'
import Map from '../map/Map'
import Bullets from '../bullets/Bullets';

class World extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clock: 0,
            time: {
                then: Date.now()
            }
        }
    }

    componentDidMount() {
        requestAnimationFrame(() => {this.tick()});

        window.addEventListener('click', e => {
            e.preventDefault();
            this._onClick(e)
        });
    }

    _onClick(e) {
        // get player pos
        const currentPLayerPosition = store.getState().player.position;

        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.

        let vec = [ x - currentPLayerPosition[0], y - currentPLayerPosition[1]];
        const length = Math.sqrt(vec[0]*vec[0]+vec[1]*vec[1]);
        let dir = [vec[0]/length, vec[1]/length];
        
        if (store.getState().target.insideMap) 
            bulletAdd({ pos: currentPLayerPosition, dir, id:this.state.clock })
    }

    tick() {
        let { then } = this.state.time
        let now = Date.now();
        const delta = now - then;
        const interval = 1000/FPS;  
        if (delta > interval && !this.deleted) {
            this.setState({
                time: { then: now },
                clock: (this.state.clock + delta)
            });
        }

        requestAnimationFrame(() => {this.tick()});
    }

    render() {
        return (<div className='world'
            style={{
            margin: '0 auto',
            position: 'relative',
            width: MAP_WIDTH+'px',
            height: MAP_HEIGHT+'px',
            backgroundColor: 'white',
            border: '2px solid white'
        }}>
            <Map />
            <Player />
            <Target />
            <Bullets clock={this.state.clock}/>
            <div className='clock' style={{position:'absolute', right:'0', color:'white'}}>{(this.state.clock / 1000).toFixed(2)}</div>
        </div>);
    }
}

export default World;