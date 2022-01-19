import React from "react";
import PropTypes from "prop-types";
import styles from "../movie.module.css"
import {Link} from "react-router-dom"
function Movie ({id, coverImg,title,summary,genre}){
    return (
        <div className={styles.default}>
        <img src={coverImg} alt={title}/>
        <h2>
            <Link className={styles.a} to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genre};
        </ul>
    </div>
    );
}
Movie.prototype={
    id : PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
}

export default Movie;