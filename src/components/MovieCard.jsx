import React from 'react'

const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
    
    const inWatchlist = list.filter((item) => {
        return item.id === movie.id
    })

    const button =
        inWatchlist.length === 0 ? (
            <button className='button' onClick={() => addMovie(movie)}>Add to List</button>
            ) : (
              <button className='button' onClick={() => removeMovie(movie)}>Remove</button>
            );

    return (
        <div className='movie-card'>
            <div>
                <img alt='movie' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    )
}

export default MovieCard
