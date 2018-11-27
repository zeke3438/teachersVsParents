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
            left: this.props.mapPosition[0],
            top: this.props.mapPosition[1],
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
        ...state.target
    }
}

export default connect(
    mapStateToProps
)(handleMovement(Target));