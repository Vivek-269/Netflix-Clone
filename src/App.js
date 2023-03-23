import './App.css';
import LandingPage from './LandingPage';
import NetflixBanner from './NetflixBanner'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/netflix' element={<NetflixBanner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
