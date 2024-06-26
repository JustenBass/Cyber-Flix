import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie';
import { ArchiveContext } from '../context/archive';
import MovieCast from '../components/MovieCast';
import MovieCard from '../components/MovieCard';
import ReviewCard from '../components/ReviewCard';
import AddReview from '../components/AddReview';
import UnauthenticatedMessage from '../components/UnauthenticatedMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


export default function MoviePage() {
    const { movie_id } = useParams()
    const { user, setUser, isAuthenticated } = useContext( UserContext )
    const { movies } = useContext( MovieContext )
    const { handleAddToArchiveOnclick, deleteSavedArchive } = useContext ( ArchiveContext )

        const selectedMovie = movies?.find((movie) => movie.id == movie_id)
        if( !selectedMovie ){
                return <h1><b>LOADING...</b></h1>
            };


        const selectedMovieReviews = () => {
            if( selectedMovie.reviews <= 0 ){
                return <h1 className='noReviewsText'> No reviews. Be the first to leave one. </h1>
            } else {
                    return selectedMovie.reviews.map((review) => (
                        <ReviewCard
                        key={ review.id }
                        review={ review }
                        selectedMovie={ selectedMovie}
                        />
                    ))
                }
            };

        const movieGenreMatch = movies.filter((movie) => movie.genre === selectedMovie.genre);
        const setMovieGenreMatch = movieGenreMatch.filter((movie) => movie.id !== selectedMovie.id);

        const selectedUniqueMovie = user.unique_movies?.find((movie) => movie.id === selectedMovie.id)

    if( isAuthenticated ){
        return (
            <>
            <div className='selectedMovieTrailerDiv'>
                <iframe className='iframeMovieTrailer' src={ selectedMovie.trailer } width="1425" height="720" allow="fullscreen" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
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
                    { selectedUniqueMovie ?
                            <FontAwesomeIcon className='addToWatchListButton'  onClick={ () => deleteSavedArchive( selectedMovie.id, user, setUser ) } icon={(faMinus)} />
                        :
                            <FontAwesomeIcon className='addToWatchListButton' onClick={ () => handleAddToArchiveOnclick( selectedMovie.id, user, setUser )} icon={faPlus} />
                        }

                </div>


                <div className='selectedMovieInfoChildDiv'>
                    <div className='selectedMovieInfoChildTextDivTwo'>
                        <h1> Cast </h1>
                    </div>
                    <div className='movieCastImgsParentDiv'>
                        { selectedMovie.connections.map((cast) => (
                          <MovieCast
                         key={ cast.id }
                         cast={ cast }
                         />
                        )) }
                    </div>
                </div>
            </div>
            <br/>

            <div className='reviewParentDiv'>
                <div className='reviewChildDiv'>
                    <div className='reviewChildTextDiv'>
                        <h1> Reviews </h1>
                    </div>
                    <br/>

                    <div className='reviewChildScrollDiv'>
                        { selectedMovieReviews() }
                    </div>
                    <br/>

                    <AddReview selectedMovie={ selectedMovie }/>
                </div>

                <div className='reviewFeaturedMovieChildDiv'>
                    <h1 className='reviewFeaturedMovieH1Text'> Featured Movie</h1>
                    <br/>
                    <br/>
                    <img className='reviewFeaturedMoviePoster' src={ selectedMovie.poster } alt='moviePoster' />
                </div>
            </div>
            <br/>

            <div className='selectedMovieInfoChildTextDivThree'>
                <h1> More Like This </h1>
            </div>
                <div className='moviePageGridContainer'>
                        { setMovieGenreMatch.map((movie) => (
                          <MovieCard
                          key={ movie.id }
                          movie={ movie }
                          />
                          )) }
                </div>
                <br/>
            </>
          )
    } else {
        return (
            <div className='userErrorParentDiv' >
                <center>
                    <div className='userErrorChildDiv'>
                     <UnauthenticatedMessage />
                    </div>
                </center>
            </div>
          )
    }
}
