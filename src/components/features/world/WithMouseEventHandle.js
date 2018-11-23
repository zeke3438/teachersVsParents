import React, { Component } from 'react';

const WithMouseEventHandle = (WrappedComponent) => {
    return class WithMouseEventHandle extends Component {

        constructor(props) {
            super(props);
            this.state = { x: 0, y: 0 };
        }

          
        // Some functions
        componentDidMount() {
            
        }
        getMousePosition(e) {
            console.log('event', e);
        }
        _onMouseMove(e) {
            this.setState({ x: e.screenX, y: e.screenY });
            console.log(this.state)
        }
        
        render() {
            return (<WrappedComponent onMouseMove={this._onMouseMove.bind(this)} data={this.state.data} {...this.state}/>)
        }
    }
};

export default WithMouseEventHandle;