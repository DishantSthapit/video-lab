import React from 'react';
import { useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../types';
import './IndividualPlaylists.scss';

declare const window: any;
function IndividualPlaylists() {
  const { id } = useParams();
  const [playlist, setPlaylist] = React.useState<PLAYLISTS | null>(null);
  React.useEffect(() => {
    setPlaylist(window.playlists.filter(((item:PLAYLISTS) => item.id === Number(id)))[0]);
  }, []);

  return (
    <div className="individual-playlists-page">
      <p>
        {playlist?.videoIds.map((videoId:number) => (
          <ul key={videoId}>
            <li>{videoId}</li>
          </ul>
        ))}
      </p>
    </div>
  );
}

export default IndividualPlaylists;
