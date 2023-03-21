import './App.css';
import LandingPage from './LandingPage';
import Netflix from './Netflix'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/netflix' element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
