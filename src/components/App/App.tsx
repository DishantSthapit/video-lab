import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlists from '../../pages/Playlists/Playlists';
import Videos from '../../pages/Videos/Videos';
import LandingPage from '../LandingPage/LandingPage';
import IndividualPlaylists from '../IndividualPlaylists/IndividualPlaylists';
import './App.scss';
import '../../style/global.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <LandingPage />
        <Routes>
          <Route path="/" element={<Playlists />} />
          <Route path="/playlists/:id" element={<IndividualPlaylists />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
