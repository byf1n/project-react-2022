import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PosterPreview} from "../posterPreview/PosterPreview";
import css from './Info.module.css'
import {useEffect} from "react";
import {moviesActions} from "../../redux";

const MovieInfo = () => {

    const dispatch = useDispatch();

    const {idMovie} = useParams();

    console.log(idMovie);

    const {genres} = useSelector(state => state.genreReducer);

    const {movies,id} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({id:id}))
    }, [id, idMovie])


    const movieObj = movies.find(movie => movie.id.toString() === idMovie);

    const genre1 = genres.find(genre => genre.id === movieObj?.genre_ids[0]);
    const genre2 = genres.find(genre => genre.id === movieObj?.genre_ids[1]);

    // console.log(genre1,genre2);

    return (
        <div className={css.main}>
            {movieObj && <h1>
                {movieObj.original_title}
            </h1>}
            <div className={css.block}>
                {movieObj && <div className={css.img}>
                    <img src={`https://image.tmdb.org/t/p/w400${movieObj.backdrop_path}`} alt=""/>
                </div>}
                {movieObj && <div className={css.info}>
                    <div>adult: {movieObj.adult.toString()}</div>
                    <div>original_language: {movieObj.original_language}</div>
                    <div>genre: {genre1?.name}, {genre2?.name}</div>
                    <div>popularity: {movieObj.popularity}</div>
                    <div>release_date: {movieObj.release_date}</div>
                    <div>vote_average: {movieObj.vote_average}</div>
                    <div>vote_count: {movieObj.vote_count}</div>
                </div>}
            </div>
            {movieObj && <h3>overview: {movieObj.overview}</h3>}
        </div>
    )
}
export {MovieInfo};