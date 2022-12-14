import css from "../MoviesPage.module.css";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genreActions, moviesActions} from "../../redux";
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const [show,setShow] = useState(false);

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    },[])

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        console.log(data.search);
        // dispatch(moviesActions.getAllMoviesBySearch({value:data.search}))
        navigate(`${data.search}`)

    }

    const {genres} = useSelector(state => state.genreReducer);


    const dispatch = useDispatch();

    const {id} = useSelector(state => state.movieReducer);

    return (
        <div>
            <div className={css.header}>
                <div onClick={() => dispatch(moviesActions.changeId(1))} className={css.link}>
                    <div className={css.btnnn}>
                        <NavLink to={'/list'}>home</NavLink>
                    </div>
                </div>
                <div>
                    <button>sw</button>
                </div>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <input type="text" placeholder={'search'} {...register('search')}/>
                        <button>search</button>
                    </form>
                </div>
                <div>
                    <button onClick={() => setShow(!show)}>genres</button>
                </div>
            </div>
                {show && <div className={css.genres}>
                    {genres.map(genre => <div onClick={()=> navigate(`genres/${genre.name}`)} className={css.genre} key={genre.id}>{genre.name}</div>)}
                </div>}
        </div>
    )
}
export {Header};