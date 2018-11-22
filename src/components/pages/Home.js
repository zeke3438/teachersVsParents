import React, { Component } from 'react';

import './css/Home.css';
import World from '../features/world/World';

class Home extends Component {
  render() {
    return (
      <div className="Content">
        <h1>Maestra jardinera Vs Padres agresivos</h1>
        <World />
      </div>
    );
  }
}

export default Home;