import {Navigate, Route, Routes} from "react-router-dom";

import {GenreBadge, MovieInfo, MoviesList} from "./components";
import {Search} from "./Search/Search";
import {Main} from "./pages/Main";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Navigate to={'list'}/>}/>
                    <Route path={'list'} element={<MoviesList/>}/>
                    <Route path={':name'} element={<Search/>}/>
                    <Route path={'genres/:genre'} element={<GenreBadge/>}/>
                    <Route path={'info/:idMovie'} element={<MovieInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
