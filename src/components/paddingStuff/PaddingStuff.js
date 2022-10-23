import css from './PaddingStuff.module.css';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const PaddingStuff = () => {

    const {id} = useSelector(state => state.movieReducer);


    const dispatch = useDispatch();
    return (
        <div className={css.main}>
            <div onClick={()=> {
                dispatch(moviesActions.changeId(id-1))
            }} className={css.btns}>previous page</div>
            <div className={css.medium}>current page: {id}</div>
            <div onClick={() => {
                dispatch(moviesActions.changeId(id+1))
            }} className={css.btns} >next page</div>
        </div>
    )
}
export {PaddingStuff};