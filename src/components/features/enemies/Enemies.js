import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../../config/constants'
import { enemyAdd } from './Reducer'

import Enemy from './Enemy'

class Enemies extends Component {

    constructor(props) {
        super(props)
        this.references = []
    }

    componentDidMount() {
        this.props.setRef(this)
        this.insertEnemies(3)
    }


    insertEnemies(cant) {
        let xPositions = MAP_WIDTH / SPRITE_SIZE
        let yPositions = MAP_HEIGHT / SPRITE_SIZE
        for(let i = 0; i< cant; i++) {    
            let pos = [Math.floor(Math.random() * xPositions) * SPRITE_SIZE, Math.floor(Math.random() * yPositions) * SPRITE_SIZE]
            enemyAdd({ pos, id:((MAP_WIDTH * pos[1]) + pos[0]) })
        }
    }

    setRef(obj) {
        this.references.push(obj);
    }

    update() {
        this.props.enemies.forEach(enemy => {
            if (enemy.ref.update) enemy.ref.update(enemy) 
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
                    <Enemy key={key} id={item.id} clock={this.props.clock} spriteLocation={item.spriteLocation} pos={item.pos} dir={item.dir} ref={ref => item.ref=ref}/>
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