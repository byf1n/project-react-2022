import css from './Search.module.css'
import {useSelector} from "react-redux";


const SearchPost = ({movie}) => {

    const {movies} = useSelector(state => state.movieReducer);

    const obj = movies.find(mov => mov.original_title.toLowerCase() === movie.name.toLowerCase());


    const {genres} = useSelector(state => state.genreReducer);

    const genre = genres.find(genre => genre.id === obj.genre_ids[0]);

    console.log(obj);

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div  className={css.post}>
                <div><img src={`https://image.tmdb.org/t/p/w400${obj.backdrop_path}`} alt="img"/></div>
                <div className={css.text}>
                    <div>{obj.original_title}</div>
                    <div>{obj.release_date.slice(0, 4)}, {obj.original_language}, {genre.name}</div>
                    <div>{obj.vote_average}</div>
                </div>
            </div>
        </div>
    )
}
export {SearchPost};