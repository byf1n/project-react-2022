import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genreActions, moviesActions} from "../../redux";
import axios from "axios";
import {TOKEN} from "../../config";
import {GenresPage} from "../GenresPage";

const GenreBadge = () => {

    const {genre} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    },[genre])

    const {genres} = useSelector(state => state.genreReducer);

    console.log(genres);

    let findGenre = genres.find(gen => gen?.name === genre).id?.toString();
    console.log(findGenre);

    const [movs,setmovs] = useState([]);


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${findGenre}`,{
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        }).then(value => setmovs(value.data.results))
    },[findGenre])

    console.log(movs);


    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {movs.map(mov => <GenresPage key={mov?.id} mov={mov}/>)}
            {/*{movs && movs.map(mov => <div key={mov?.id}>{mov?.id}</div>)}*/}
        </div>
    )
}
export {GenreBadge};