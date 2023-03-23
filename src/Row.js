import React, { useState } from 'react';
import axios from 'axios';
import './Row.css'
import requests from './requests'

const baseURL = 'https://image.tmdb.org/t/p/original'

export default function Row() {
  const [MovieData, setMovieData] = useState([]);
  async function getData() {
    const requestData = await axios.get(requests.fetchNetflixOriginals);
    setMovieData(requestData.data.results)
  }
  // console.log(MovieData)
  getData();
  return (
    <>
      {/* <div className="MovieRow">heading</div> */}
      <div className='roww'>
        {MovieData.map((element) => {
          return (
            <div className='rowww'>
            <img
              className="co"
              key={element.id}
              src={`${baseURL}${element.poster_path}`}
              alt='rowImage'
            /></div>
          );
        })}
      </div>

    </>

  )
}
