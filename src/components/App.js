// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header'
import Home from './pages/Home'

import menuItems from '../data/list';

// Definitions
class App extends Component {  
  render() {
    return (
      <div>
        <Header title="Zeke's Game" menuItems={menuItems}>
          {/* Things here will come inside component via "this.props.children" */}
        </Header>
        <Home />
      </div>
    );
  }
}

export default App;