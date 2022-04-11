import { useNavigate } from 'react-router-dom';
import './Card.scss';

type TProps = {
    name:string;
    description:string;
    videos?: boolean;
    id:number;
}

function Card({
  name, description, videos, id,
}:TProps) {
  const navigate = useNavigate();

  const handleClick = (playlistId: number) => {
    navigate(`/playlists/${playlistId}`);
  };

  return (
    <div {...(!videos && { onClick: () => handleClick(id) })} className="card-wrapper">
      <h2>{name}</h2>
      {videos && <div>{description}</div>}
      {!videos && <div>Explore Playlist</div>}
    </div>
  );
}

export default Card;
