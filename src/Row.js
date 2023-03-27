import React, { useState } from 'react';
import axios from 'axios';
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/original'

export default function Row(props) {
  const [MovieData, setMovieData] = useState([]);
  async function getData() {
    const requestData = await axios.get(props.fetchUrl);
    setMovieData(requestData.data.results)
  }
  // console.log(MovieData)
  getData();
  return (
    <div className='Rows'>
      <div className="title">{props.title}</div>
      <div className='roww'>
        {MovieData.map((element) => {
          return (
            <img
              className="co"
              key={element.id}
              src={`${baseURL}${element.poster_path}`}
              alt='rowImage'
            />
          );
        })}
      </div>

    </div>

  )
}
