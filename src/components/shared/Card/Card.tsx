import { useNavigate } from 'react-router-dom';
import { PLAYLISTS } from '../../../types';
import './Card.scss';

type TProps = {
    name:string;
    description:string;
    videos?: boolean;
    id:number;
}

declare const window: any;

function Card({
  name, description, videos, id,
}:TProps) {
  const navigate = useNavigate();

  const handleClick = (playlistId: number) => {
    navigate(`/playlists/${playlistId}`);
  };

  const handleRemove = (playlistId:number) => {
    window.playlists = window.playlists.filter((item:PLAYLISTS) => item.id !== Number(playlistId));
  };

  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      {videos && <div>{description}</div>}
      {!videos && (
      <>
        <button onClick={() => handleClick(id)} className="playlist-button" type="button">Explore Playlist</button>
        <button onClick={() => handleRemove(id)} className="playlist-button" type="button">Remove Playlist</button>
      </>
      )}
    </div>
  );
}

export default Card;
