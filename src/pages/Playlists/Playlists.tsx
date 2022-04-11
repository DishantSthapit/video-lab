import Card from '../../components/shared/Card/Card';
import './Playlists.scss';
import { PLAYLISTS } from '../../types';

declare const window: any;

function Playlists() {
  const handleAdd = () => {
    alert('Functionality to add playlist coming soon');
  };

  return (
    <div className="playlist-wrapper">
      {
        window.playlists && window.playlists.map((playlist: PLAYLISTS) => (
          <Card id={playlist.id} name={playlist.name} description={playlist.description} />
        ))
      }
      <button onClick={() => handleAdd()} className="add-button" type="button">Add new Playlist</button>
    </div>
  );
}

export default Playlists;
