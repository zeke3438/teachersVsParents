import React from 'react';
import store from '../../../config/Store';
import { connect } from 'react-redux';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    _onMouseLeave() {
        store.dispatch({ type: 'MAP_CURSOR_LEAVE' });
    }
    _onMouseEnter() {
        store.dispatch({ type: 'MAP_CURSOR_ENTER' });
    }

    render() {
        return (<div 
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
        hover: state.map.hover
    }
}

export default connect(
    mapStateToProps
)(Map);