import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
    return (  
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__item">
            <h3 className="movie__title">{title}</h3>
            <ul className="movie__genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="movie__genre">{genre}</li>
                })}
            </ul>
            <h6 className="movie__year">{year}</h6>
            <p className="movie__text">{summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;