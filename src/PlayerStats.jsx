//@flow

import React from 'react';
import PlayerStatsType from './types.js';

export default class PlayerStats extends React.Component {
  static defaultProps: Object;
  props: {
    stats: PlayerStatsType
  };

  render() {
    return (
      <div>
        <p>
          gold={this.props.stats.gold}
        </p>
        <p>
          exp={this.props.stats.level}
        </p>
        <p>
          exp={this.props.stats.exp.current}/{this.props.stats.exp.max}
        </p>
      </div>
    );
  }
}

PlayerStats.defaultProps = {
  stats: {
    gold: 0,
    level: 0,
    exp: {
      current: 0,
      max: 0
    }
  }
};
