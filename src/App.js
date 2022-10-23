import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {MoviesList} from "./components/moviesList/MoviesList";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {Search} from "./Search/Search";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Navigate to={'list'}/>}/>
                    <Route path={'list'} element={<MoviesList/>}/>
                    <Route path={':name'} element={<Search/>}/>
                    <Route path={'info/:id'} element={<MovieInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
