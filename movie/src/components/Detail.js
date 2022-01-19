import styles from "../routes/Movie.module.css";

function Detail({cover_img, title, genres, summary}){

    return (
        <div className={styles.default}>
            <h1>Detail of movie</h1>
            <img src={cover_img}/>
            <h2>TITLE:{title}</h2>
            <h3>GENRE{genres && genres.map((item)=><ul className={styles.genre} key={item}>{item}</ul>)}</h3>
            <h4>SUMMARY <br/><br/>{summary}</h4>
        </div>
    )

}

export default Detail