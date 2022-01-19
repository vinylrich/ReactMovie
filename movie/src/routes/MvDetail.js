import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./Movie.module.css"
import Detail from "../components/Detail.js"
function MvDetail(){
    const {id} = useParams() // useParams = parameter값을 가져오는 함수
    const [movieDetail,setMovieDetails] = useState([])
    const getMovieById = async () =>{
        const json = await (
           await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetails(json.data.movie)
    };
    useEffect(() => {getMovieById();}, []);
    return (
        <Detail
            cover_img={movieDetail.background_image_original}
            title={movieDetail.title}
            genres={movieDetail.genres}
            summary={movieDetail.description_full}
        />
    );
}

export default MvDetail;