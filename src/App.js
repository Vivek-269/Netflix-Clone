import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/mainPage' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
