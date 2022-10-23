import css from "./MoviesListCard/MoviesCars.module.css";
import {PosterPreview} from "./posterPreview/PosterPreview";
import {useNavigate} from "react-router-dom";

const GenresPage = ({mov}) => {

const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate(`/info/${mov?.id}`) } className={css.post}>
                <PosterPreview path={mov?.poster_path}/>
                <div className={css.text}>
                    <div>{mov?.original_title}</div>
                    <div>{mov?.release_date.slice(0,4)}, {mov?.original_language}</div>
                    <div>{mov?.vote_average}</div>
                </div>
            </div>
        </div>
    )
}
export {GenresPage};