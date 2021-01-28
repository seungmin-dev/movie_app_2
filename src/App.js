import React from "react";
import axios from "axios";
import Movie from './Movies';
import "./App.css";

class App extends React.Component { 
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async () => { //비동기함수
    const { data : { data : { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); //axios가 끝날때까지 기다리기
    this.setState({ movies, isLoading : false });
  }
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state; //isLoading 옆에 movies를 선언?해주지 않으면 밑에서 this.state.movies 이렇게 장황하게 써야함
    return (
      <section class="containter">
        {isLoading ? (<div class="loader"><span class="loader__text">loading...</span></div>) : movies.map(movie => (
          <div class="movies">
            <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
          </div>
        ))}
      </section>
    ); 
  };
}

export default App;