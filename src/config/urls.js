const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    genres: '/genre/movie/list',
    movies: '/discover/movie',
    searchMovies: `/search/keyword?query=`,
    movieId: '/movie/',
    genre: '/discover/movie?with_genres='
}
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTNiOGNmNjY2NThhM2QwODJiMzg3ZjMyNGE5OTg2YSIsInN1YiI6IjYzNTJkMGNhZjNiNDlhMDA4NjI0OTNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R0FlB5I7KILJzMAwB5itR-dGOzEyz84jKyF_Ld3vcGc'

export {baseURL, urls, TOKEN}