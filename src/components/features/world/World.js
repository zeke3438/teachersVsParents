import React from 'react';
import { connect } from 'react-redux';
import store from '../../../config/Store'
import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';

import Player from '../player/Player'
import Bullet from '../bullet/Bullet'
import Target from '../target/Target'
import Map from '../map/Map'

class World extends React.Component {

    checkBulletsOutOfBounds() {
        if (this.props.bullets && this.props.bullets.length === 0) return
        var i = this.props.bullets.length
        while (i--) { // Backward loop in order to slice elements
            let bulletRef = this.props.bullets[i].ref
            if (bulletRef === undefined) return
            if(this.props.bullets[i].ref.state.deleted) this.props.bullets.splice(i, 1);
        }
        store.dispatch({ type: 'WORLD_BULLET_CHECKED' })
    }

    render() {
        
        if (this.props.bulletsOutOfBounds) this.checkBulletsOutOfBounds()

        return (<div style={{
            margin: '0 auto',
            position: 'relative',
            width: MAP_WIDTH+'px',
            height: MAP_HEIGHT+'px'
        }}>
            <Map />
            <Player />
            <Target />
            {this.props.bullets && this.props.bullets.map((item, key) => 
                <Bullet key={key} pos={item.pos} velocity={item.velocity} ref={(bulletRef) => {item.ref = bulletRef }} />)
            }    
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