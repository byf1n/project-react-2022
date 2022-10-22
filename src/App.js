import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>

                </Route>
            </Routes>
        </div>
    );
};

export {App};
