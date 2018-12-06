import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../../config/constants'
 

import walkSprite from './player.png';
import handleMovement from './Movement';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            style: {
                position: 'absolute',
                backgroundImage: `url('${walkSprite}')`,
                width: SPRITE_SIZE + 'px',
                height: SPRITE_SIZE + 'px',
            }
        }
    }

    render(){
        const { style } = this.state
        const el = {
            left: this.props.position[0],
            top: this.props.position[1],
            backgroundPosition: this.props.spriteLocation[0] + 'px ' + this.props.spriteLocation[1] + 'px',
        };
        const newStyle = { ...style, ...el};
        return (
            <div className='player' style={ newStyle } />
          );
    }
    
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}

// TODO: think about implement HOC with the functionality of handleMovement
export default connect(
    mapStateToProps
)(handleMovement(Player));