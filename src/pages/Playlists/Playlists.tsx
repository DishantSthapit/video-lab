import Card from '../../components/shared/Card/Card';
import playlists from '../../static/playlists';
import { PLAYLISTS } from '../../types';

function Playlists() {
  return (
    <div className="playlist-wrapper">
      {
        playlists && playlists.map((playlist: PLAYLISTS) => (
          <Card name={playlist.name} description={playlist.description} />
        ))
      }
    </div>
  );
}

export default Playlists;
