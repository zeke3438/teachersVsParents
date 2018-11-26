import React from 'react';
import { connect } from 'react-redux';
import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';

import Player from '../player/Player'
import Bullet from '../bullet/Bullet'
import Target from '../target/Target'
import Map from '../map/Map'

class World extends React.Component {
    render() {
        // const bullets = this.props.bullets.map(item => new Bullet(item))
        // {bullets.forEach(item => item.render())}

        return (<div style={{
            margin: '0 auto',
            position: 'relative',
            width: MAP_WIDTH+'px',
            height: MAP_HEIGHT+'px'
        }}>
            <Map />
            <Player />
            <Target />
            {this.props.bullets && this.props.bullets.map((item, key) => <Bullet key={key} pos={item.pos}  velocity={item.velocity} />)}    
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        ...state.world,
    }
}

export default connect(
    mapStateToProps
)(World);