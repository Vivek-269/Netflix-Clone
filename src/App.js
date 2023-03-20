import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//1db733db761e3afcd044450d1d33beb4
//https://api.themoviedb.org/3/movie/550?api_key=1db733db761e3afcd044450d1d33beb4