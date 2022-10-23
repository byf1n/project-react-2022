import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../components/MoviesListCard/MoviesListCard";
import {SearchPost} from "./SearchPost";
import {useParams} from "react-router-dom";
import {moviesActions} from "../redux";
import {useEffect} from "react";

const Search = () => {
    const {name} = useParams();
    console.log(name);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMoviesBySearch({value:name}))
    },[name])

    const {searchMovies} = useSelector(state => state.movieReducer);

    const {movies} = useSelector(state => state.movieReducer);

    console.log(movies);

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {searchMovies.map(movie => <SearchPost movies={movies} movie={movie} key={movie.id}/>)}
            </div>
            {JSON.stringify(searchMovies)}
        </div>
    )
}
export {Search};