import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../components/MoviesListCard/MoviesListCard";
import {SearchPost} from "./SearchPost";
import {useParams} from "react-router-dom";
import {moviesActions} from "../redux";
import {useEffect} from "react";

const Search = () => {
    const {name} = useParams();
    console.log(name);

    const {movies,id,searchMovies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({id:id}))
    }, [id])

    useEffect(() => {
        dispatch(moviesActions.getAllMoviesBySearch({value:name.toLowerCase()}))
    },[name])

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {/*{JSON.stringify(searchMovies)}*/}
                <div>
                    {searchMovies && searchMovies.map(mov => <SearchPost key={mov.id} mov={mov} />)}
                </div>
            </div>


        </div>
    )
}
export {Search};