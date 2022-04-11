import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <div className="navigation-wrapper">
      <div className="navigation-wrapper-item">
        <Link to="/">Playlists</Link>
      </div>
      <div className="navigation-wrapper-item">
        <Link to="/videos">Videos</Link>
      </div>
    </div>
  );
}

export default Navigation;
