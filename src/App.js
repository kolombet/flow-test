//@flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerStats from './PlayerStats';
import type PlayerStatsType from './types';

class App extends Component {
  state = {};
  state: {
    playerStats: PlayerStatsType
  };

  componentDidMount() {
    //data load emulation
    setTimeout(() => {
      this.setState({
        playerStats: {
          gold: 123,
          level: 5,
          exp: {
            current: 123,
            max: 345
          }
        }
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        {this.state.playerStats !== null
          ? <PlayerStats
              stats={this.state.playerStats}
            />
          : <PlayerStats />}
      </div>
    );
  }
}

export default App;
