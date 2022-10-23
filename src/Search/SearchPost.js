import css from './Search.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {moviesActions} from "../redux";
import {services} from "../services/services";


const SearchPost = ({mov:{id:IdMovie,name}}) => {



    console.log(IdMovie);

    const [movie, setMovie] = useState();

    useEffect(() => {
        services.getMovieById(IdMovie).then(({data}) => setMovie(data))
    },[IdMovie])

    console.log(movie);

    const navigate = useNavigate();

    return (
    <div>

        <div>
            <h1>{name}</h1>
            id: {IdMovie}
        </div>
    </div>

    )
}
export {SearchPost};