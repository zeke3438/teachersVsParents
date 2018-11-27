import React from 'react';
import store from '../../../config/Store';
import { SetMapHover } from './Reducer'
import { worldBulletAdd } from '../world/Reducer' 
import { connect } from 'react-redux';

class Map extends React.Component {

    _onMouseLeave() {
        SetMapHover(false);
    }
    _onMouseEnter() {
        SetMapHover(true);
    }

    _onClick(e) {
        // get player pos
        const currentPLayerPosition = store.getState().player.position;

        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.

        let vec = [ x - currentPLayerPosition[0], y - currentPLayerPosition[1]];
        const length = Math.sqrt(vec[0]*vec[0]+vec[1]*vec[1]);
        let velocity = [vec[0]/length, vec[1]/length];
        
        worldBulletAdd({ pos: currentPLayerPosition, velocity })
    }

    render() {
        return (<div
                onClick={this._onClick.bind(this)}
                onMouseLeave={this._onMouseLeave.bind(this)} 
                onMouseEnter={this._onMouseEnter.bind(this)}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'chocolate',
                border: '4px solid white'
            }}>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        ...state.map,
    }
}

export default connect(
    mapStateToProps
)(Map);