import React, {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading,setLoading] = useState(true);//state?
    const [movies,setMovies] = useState([])
    const getMovies = async() => {
        const response = await (await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rear`
        )).json();
        setMovies(response.data.movies);
        setLoading(false)
    }
    useEffect(()=>{
        getMovies();
    },[])
    return (
        <div>
            {loading ? <h1>Loading...</h1>: null}
            {movies.map((movie)=> (
                <Movie
                    key = {movie.id}
                    id = {movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    genre={movie.genre}
                    summary={movie.summary}/>
            ))}
        </div>
    );
}
export default Home;