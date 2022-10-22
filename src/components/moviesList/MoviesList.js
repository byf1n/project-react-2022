import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const {genres} = useSelector(state => state.genreReducer);

    const {movies,id} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies())
    }, [id])

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {movies.map(movie => <MoviesListCard genres={genres} key={movie.id} movie={movie}/>)}
        </div>
    )
}
export {MoviesList};