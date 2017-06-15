import React from 'react';

function TrackList(props) {
  return (
    <div>
    {
      props.tracks.map((track, key) => {
        return <div key={key} className="track">{track.title}</div>
      })
    }
    </div>
  );
}

export default TrackList;
