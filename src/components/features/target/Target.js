import React, { Component } from 'react';
import store from '../../../config/Store';
import { connect } from 'react-redux';
 
import handleMovement from './Movement';

class Target extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseover: false,
            ...props,
            style: {
                position: 'absolute',
                width: '10px',
                height: '10px',

                border: '3px solid white',
                borderRadius: '50%'
            }
        }
    }

    shouldRender() {
        return store.getState().target.insideMap
    }

    setNewPosition() {
        const bounds = store.getState().map.bounds
        const { style } = this.state
        const pos = {
            left: this.props.screenPosition.x - bounds.x,
            top: this.props.screenPosition.y - bounds.y,
        };
        const newStyle = this.shouldRender() ? { ...style, ...pos} : { backgroundColor: 'transparent' }
        return newStyle;
    }

    render(){
        return (
            <div className='target' style={this.setNewPosition()} />
          );
    }
}

function mapStateToProps(state) {
    return {
        ...state.target
    }
}

export default connect(
    mapStateToProps
)(handleMovement(Target));