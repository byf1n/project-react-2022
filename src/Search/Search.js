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
    })

    const {searchMovies} = useSelector(state => state.movieReducer);

    return (
        <div>
            {/*<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>*/}
            {/*    {searchMovies.map(movie => <SearchPost movie={movie} key={movie.id}/>)}*/}
            {/*</div>*/}
        </div>
    )
}
export {Search};