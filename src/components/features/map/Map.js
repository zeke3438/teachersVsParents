import React from 'react'
import { SetMapBounds } from './Reducer'
import { connect } from 'react-redux'

class Map extends React.Component {

    componentDidMount() {
        let node = document.getElementsByClassName('world')[0];
        SetMapBounds(node.getBoundingClientRect())
    }
    
    render() {
        return (<div className='map'
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