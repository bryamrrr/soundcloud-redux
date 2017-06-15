import React, { Component } from 'react';

import TrackList from './track-list';

const tracks = [
  {
    title: 'The perfect song',
  },
  {
    title: 'The funeral',
  }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple mundo</div>
        <TrackList tracks={tracks} />
      </div>
    );
  }
}
