import Card from '../../components/shared/Card/Card';
import './Videos.scss';
import { VIDEOS } from '../../types';

declare const window: any;
function Videos() {
  return (
    <div className="videos-wrapper">
      {
        window.videos && window.videos.map((video: VIDEOS) => (
          <Card key={video.id} id={video.id} videos name={video.name} description={video.description} />
        ))
      }
    </div>
  );
}

export default Videos;
