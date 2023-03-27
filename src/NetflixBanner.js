import React, { useEffect, useState } from 'react'
import './NetflixBanner.css'
import requests from './requests'
import axios from 'axios';

export default function Netflix() {

  const [bannerData, setBannerData] = useState();
  const [darknav, setdarkNav] = useState(false);

  useEffect(() => {
    async function getData() {
      const requestData = await axios.get(requests.fetchNetflixOriginals);
      setBannerData(requestData.data.results[Math.floor(Math.random() * requestData.data.results.length - 1)]);
    }
    getData();
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setdarkNav(true);
    } else {
      setdarkNav(false);
    }
  });

  return (
    <div className='netflixBanner' >
      <div className={`nav sticky-top ${darknav && 'darkNav'}`}>
        <img src="./Netflix_logo.png" alt="NetflixLogo" height='40px' />
        <img src="./blocklogo.png" alt="blocklogo" width='40px' />
      </div>
      <div className='bannerDiv'>
        <img className='banner' src={`https://image.tmdb.org/t/p/original${bannerData?.backdrop_path}`} alt="bannerImg" />
        <div className='bannerDiscription'>
          <h1>{bannerData?.name}</h1>
          <div className="button">
            <button>Play</button>
            <button>My List</button>
          </div>
          <h6>{bannerData?.overview}</h6>
        </div>
      </div>
      <div className='fadeBanner'></div>
    </div>
  )
}
//1db733db761e3afcd044450d1d33beb4
//https://api.themoviedb.org/3/movie/550?api_key=1db733db761e3afcd044450d1d33beb4