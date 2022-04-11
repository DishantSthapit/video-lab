import Card from '../../components/shared/Card/Card';
import videos from '../../static/videos';
import './Videos.scss';
import { VIDEOS } from '../../types';

function Videos() {
  return (
    <div className="videos-wrapper">
      {
        videos && videos.map((playlist: VIDEOS) => (
          <Card videos name={playlist.name} description={playlist.description} />
        ))
      }
    </div>
  );
}

export default Videos;
