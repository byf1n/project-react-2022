import {Header} from "./header/Header";
import {MoviesList} from "../components/moviesList/MoviesList";
import {PaddingStuff} from "../components/paddingStuff/PaddingStuff";
import {Outlet} from "react-router-dom";

const Main = () => {

    return (
        <div>
            <Header/>
            <Outlet/>

        </div>
    )
}
export {Main};