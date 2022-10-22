import {PosterPreview} from "../posterPreview/PosterPreview";
import css from './MoviesCars.module.css'
import {useSelector} from "react-redux";
const MoviesListCard = ({movie,genres}) => {

   const genre = genres.find(genre => genre.id === movie.genre_ids[0]);

    return (
        <div className={css.post}>
                <PosterPreview path={movie.poster_path}/>
            <div className={css.text}>
                <div>{movie.original_title}</div>
                <div>{movie.release_date.slice(0,4)}, {movie.original_language}, {genre.name}</div>
                <div>{movie.vote_average}</div>
            </div>
        </div>
    )
}
export {MoviesListCard};