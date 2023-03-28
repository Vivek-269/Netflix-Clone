import React from 'react'
import NetflixBanner from './NetflixBanner'
import Row from './Row'
import Navbar from './Navbar'
import requests from './requests'

function MainPage() {
    return (
        <>
            <Navbar/>
            <NetflixBanner />
            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title='Trending' fetchUrl={requests.fetchTrending}/>
            <Row title='Top-Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentries' fetchUrl={requests.fetchDocumentaries}/>
            
        </>
    )
}

export default MainPage
