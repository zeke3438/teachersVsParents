import React, { Component } from 'react';
import store from '../../../config/Store';
import { connect } from 'react-redux';
 
import handleMovement from './Movement';

class Target extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseover: false,
            style: {
                position: 'absolute',
                left: this.props.position[0],
                top: this.props.position[1],
                width: '10px',
                height: '10px',

                border: '3px solid white',
                borderRadius: '50%',
            }
        }
    }

    shouldRender() {
        return store.getState().map.hover;
    }

    setNewPosition() {
        const { style } = this.state
        const pos = {
            left: this.props.position[0],
            top: this.props.position[1],
        };
        const newStyle = this.shouldRender() ? { ...style, ...pos} : { backgroundColor: 'transparent' }
        return newStyle;
    }

    render(){
        return (
            <div style={this.setNewPosition()} />
          );
    }
    
}

function mapStateToProps(state) {
    return {
        position: state.target.position
    }
}

export default connect(
    mapStateToProps
)(handleMovement(Target));