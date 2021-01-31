import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movie"> 
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) => { //map함수에선 index를 제공함
                    return (
                        <li key={index} className="genres__genre">{genre}</li>
                    )
                })}
            </ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>;
}

// JSX에서 class를 그냥 class라고 하면 react의 class와 혼돈이 돼 오류발생 -> className
// 비슷하게 <label for= ~~>은 HTML, for는 JS에서 반복문(loop)을 의미, <label htmlFor= ~~>라고 해야함

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;