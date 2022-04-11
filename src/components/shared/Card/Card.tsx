import './Card.scss';

type TProps = {
    name:string;
    description:string;
    videos?: boolean;
}

function Card({
  name, description, videos,
}:TProps) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      {videos && <div>{description}</div>}
    </div>
  );
}

export default Card;
