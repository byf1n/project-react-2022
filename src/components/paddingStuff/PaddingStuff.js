import css from './PaddingStuff.module.css';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useEffect} from "react";
const PaddingStuff = () => {

    const {id} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(moviesActions.getAllMovies())
    }, [id])

    const dispatch = useDispatch();
    return (
        <div className={css.main}>
            <div onClick={()=> {
                dispatch(moviesActions.changeId(id-1))
            }} className={css.btns}>previous page</div>
            <div className={css.medium}>current page: {id}</div>
            <div onClick={() => dispatch(moviesActions.changeId(id+1))} className={css.btns} >next page</div>
        </div>
    )
}
export {PaddingStuff};