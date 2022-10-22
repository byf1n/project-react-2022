import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {MoviesList} from "./components/moviesList/MoviesList";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={Navigate('/list')}/>
                    <Route path={'/list'} element={<MoviesList/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
