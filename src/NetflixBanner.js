import React, { useEffect, useState } from 'react'
import './NetflixBanner.css'
import requests from './requests'
import axios from 'axios';

export default function Netflix() {

  const [bannerData, setBannerData] = useState();

  useEffect(() => {
    async function getData() {
      const requestData = await axios.get(requests.fetchNetflixOriginals);
      setBannerData(requestData.data.results[Math.floor(Math.random() * requestData.data.results.length - 1)]);
    }
    getData();
  }, []);



  return (
    <div className='netflixBanner' >
      <div className='bannerDiv'>
        <img className='banner' src={`https://image.tmdb.org/t/p/original${bannerData?.backdrop_path}`} alt="bannerImg" />
        <div className='bannerDiscription'>
          <h1>{bannerData?.name}</h1>
          <div className="bttn">
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