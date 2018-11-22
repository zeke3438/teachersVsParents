import React from 'react';

import Player from '../player/Player'
import Map from '../map/Map'

function World(props) {
    return (<div style={{
        margin: '0 auto',
        position: 'relative',
        width: '800px',
        height: '600px'
    }}>
        <Map />
        <Player />
    </div>);
}

export default World;