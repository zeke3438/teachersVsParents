import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BULLET_VELOCITY } from '../../../config/constants'

// import { bulletsUpdate } from './Reducer'

import Bullet from './Bullet'

class Bullets extends Component {

    constructor(props) {
        super(props)
        this.bullets = []
    }

    componentWillUpdate(props){
        // bulletsUpdate(props.clock - this.props.clock)
        let delta = props.clock - this.props.clock

        this.bullets = props.bullets.map(bullet => {
            return {
                pos: [
                    bullet.pos[0] + bullet.dir[0] + BULLET_VELOCITY * delta,
                    bullet.pos[1] + bullet.dir[1] + BULLET_VELOCITY * delta
                ],
                dir: bullet.dir,
                id: bullet.id
            }
        })
    }

    render(){
        return(
            <div className= 'bullets'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-604px',
                    marginLeft: '4px',
                }}>
            {this.bullets && this.bullets.map((item, key) => 
                <Bullet key={key} pos={item.pos} />)
            } 
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.bullets,
    }
}

export default connect(
    mapStateToProps
)(Bullets);