import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants'
import { enemyAdd } from './Reducer'

import Enemy from './Enemy'

class Enemies extends Component {

    constructor(props) {
        super(props)
        this.references = []
    }

    componentDidMount() {
        this.props.setRef(this)
        let pos = [Math.random() * (MAP_WIDTH), Math.random() * (MAP_HEIGHT)]
        enemyAdd({ pos, id:this.props.clock })
    }

    setRef(obj) {
        this.references.push(obj);
    }

    update() {
        this.props.enemies.forEach(enemy => {
            if (enemy.ref.update) enemy.ref.update() 
        })
    }

    render(){
        return(
            <div className= 'enemies'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-'+ MAP_HEIGHT +'px',
                }}>
                {this.props.enemies && this.props.enemies.map((item, key) => 
                    <Enemy key={key} id={item.id} clock={this.props.clock} pos={item.pos} dir={item.dir} ref={ref => item.ref=ref}/>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.enemies,
    }
}

export default connect(
    mapStateToProps
)(Enemies);