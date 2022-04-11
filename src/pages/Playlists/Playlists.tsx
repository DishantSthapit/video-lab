import Card from '../../components/shared/Card/Card';
// import playlists from '../../static/playlists';
import { PLAYLISTS } from '../../types';

declare const window: any;

function Playlists() {
  return (
    <div className="playlist-wrapper">
      {
        window.playlists && window.playlists.map((playlist: PLAYLISTS) => (
          <Card id={playlist.id} name={playlist.name} description={playlist.description} />
        ))
      }
    </div>
  );
}

export default Playlists;
