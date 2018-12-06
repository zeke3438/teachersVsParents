import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MAP_HEIGHT } from '../../../config/constants'
import { bulletRemove } from './Reducer'


import Bullet from './Bullet'

class Bullets extends Component {

    constructor(props) {
        super(props)
        this.bulletsToDelete = []
    }

    deleteBullet(id) {
        this.bulletsToDelete.push(id)
    }

    componentWillReceiveProps() {
        // if (this.bulletsToDelete.length > 0) {
        //     let ids = this.bulletsToDelete
        //     bulletRemove(idss)
        //     this.bulletsToDelete = []
        // }
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
                    <Bullet key={key} id={item.id} clock={this.props.clock} pos={item.pos} dir={item.dir} deleteBullet={this.deleteBullet.bind(this)}/>
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