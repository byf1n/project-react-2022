import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PaddingStuff} from "../paddingStuff/PaddingStuff";

const MoviesList = () => {

    const {genres} = useSelector(state => state.genreReducer);

    const {movies,id} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({id:id}))
    }, [id])

    return (
        <div>
            <PaddingStuff/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {movies.map(movie => <MoviesListCard genres={genres} key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}
export {MoviesList};