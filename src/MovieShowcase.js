import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => movieData.map(movie => <MovieCard title={movie.title} poster={movie.poster} IMDBRating={movie.IMDBRating} genres={movie.genres} />)

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
