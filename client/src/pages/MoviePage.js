import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'
import { useParams } from "react-router-dom";
import MovieCast from '../components/MovieCast';

export default function MoviePage() {
    const { movies } = useContext( MovieContext )
    const { id } = useParams()

    const selectedMovie = movies.find((movie) => movie.id == id)
    if( !selectedMovie ){
        return <h1><b>LOADING...</b></h1>
    }

    const movieCast = selectedMovie.connections.map((cast) => (
        <MovieCast
        key={ cast.id }
        cast={ cast }
        />
    ))

  return (
    <>
    <div className='selectedMovieTrailerDiv'>
        <iframe className='iframeMovieTrailer' src={selectedMovie.trailer} width="1425" height="720" allow="fullscreen" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    </div>

    <div className='selectedMovieInfoParentDiv'>
        <div className='selectedMovieInfoChildDiv'>
            <div className='selectedMovieInfoChildTextDiv'>
                <h1>{ selectedMovie.title }</h1>
            </div>
            <br/>
            <div className='selectedMovieInfoChildTextDiv'>
                <h3>{ selectedMovie.genre } - { selectedMovie.year}</h3>
            </div>
        </div>

        <div className='selectedMovieInfoChildDiv'>
            <div className='selectedMovieInfoChildTextDivTwo'>
                <h1>Cast</h1>
            </div>
            <div className='movieCastImgsParentDiv'>
                { movieCast }
            </div>
        </div>
    </div>
    </>
  )
}