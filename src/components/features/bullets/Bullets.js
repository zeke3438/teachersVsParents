import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bulletsUpdate } from './Reducer'
import { MAP_HEIGHT } from '../../../config/constants'

import Bullet from './Bullet'

class Bullets extends Component {

    constructor(props) {
        super(props)
        this.references = []
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    setRef(obj) {
        this.references.push(obj);
    }

    update() {
        this.props.bullets.forEach(bullet => {
            if (bullet.ref && bullet.ref.update) bullet.ref.update()
        })
        bulletsUpdate(this.props.bullets.map(bullet => {return {...bullet, x:bullet.ref.state.x, y:bullet.ref.state.y} }))
    }

    render(){
        return(
            <div className= 'bullets'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-'+ MAP_HEIGHT +'px',
                }}>
                {this.props.bullets && this.props.bullets.map((item, key) => 
                    <Bullet key={key} id={item.id} clock={this.props.clock} pos={item.pos} dir={item.dir} ref={ref => item.ref=ref}/>
                )}
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