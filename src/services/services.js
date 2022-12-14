import {axiosService} from "./axios.service";
import {TOKEN, urls} from "../config";
import axios from "axios";

const services = {
    getAllGenres: () => axiosService.get(urls.genres,{
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    }),
    getMoviesById: (id) => axiosService(urls.movies + `?page=${id}`,{
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    }),
    getMovieBySearch: (value) => axiosService(urls.searchMovies + value,{
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    }),
    getMovieById: (idMovie) => axiosService(urls.movieId + idMovie,{
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    }),
    getGenre: (idGenre) => axiosService(urls.genre + idGenre,{
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    })


    // getAllGenres: () => axios.get('https://jsonplaceholder.typicode.com/users')

}

export {
    services
}