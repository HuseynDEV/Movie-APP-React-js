import React from "react"
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import axios from "axios"

class App extends React.Component {

    state = {
        movies: [],

        searchQuery: ''
    }



    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/list/8192882?api_key=0348fafb60978c204219556020b5330f&language=en-US')
        console.log(response.data.items)
        this.setState({ movies: response.data.items })
    }



    deleteMovie = (data) => {

        axios.post(`
        https://api.themoviedb.org/3/list/8192882/remove_item?media_id=${data.id}&session_id=2d3c6c2a869f62b18ee79f31ec0c5e4f82fc4d6c&api_key=0348fafb60978c204219556020b5330f`)


        let filter = this.state.movies.filter(m => (
            m.id != data.id
        ))

        this.setState({ movies: filter })
    }








    searchMovie = (event) => {
        // axios.post(`https://api.themoviedb.org/3/list/8192882/add_item?media_id=${event.target.value}&session_id=2d3c6c2a869f62b18ee79f31ec0c5e4f82fc4d6c&api_key=0348fafb60978c204219556020b5330f`)
        this.setState({ searchQuery: event.target.value})
    }




    render() {

        let filteredMovies = this.state.movies.filter(movie => {
            return movie.name || movie.title.toLocaleLowerCase().includes(this.state.searchQuery.toLocaleLowerCase())
        })


        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                            searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    deleteMovieProps={this.deleteMovie}
                    movie={filteredMovies} />
            </div>
        )
    }
}



export default App