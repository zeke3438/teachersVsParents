import React, { Component } from 'react';
import { connect } from 'react-redux';
 

import walkSprite from './player_walk.png';
import handleMovement from './Movement';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            style: {
                position: 'absolute',
                left: this.props.position[0],
                top: this.props.position[1],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px',
            }
        }
    }

    render(){
        const { style } = this.state
        const el = {
            left: this.props.position[0],
            top: this.props.position[1],
        };
        const newStyle = { ...style, ...el};
        return (
            <div style={ newStyle } />
          );
    }
    
}

function mapStateToProps(state) {
    return {
        position: state.player.position
    }
}

// TODO: think about implement HOC with the functionality of handleMovement
export default connect(
    mapStateToProps
)(handleMovement(Player));