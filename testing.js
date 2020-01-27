import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
	generateMovieCards = () => {
		return movieData.map((movie, index) => <MovieCard
		      key={index}
		      title={movie.title}
		      IMDBRating={movie.IMDBRating}
		      genres={movie.genres}
		      poster={movie.poster}
		    />)
	};

	render() {
		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
	}
}







import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png';
import one from '../assets/stars/1-stars.png';
import two from '../assets/stars/2-stars.png';
import three from '../assets/stars/3-stars.png';
import four from '../assets/stars/4-stars.png';
import five from '../assets/stars/5-stars.png';

const imgMapper = { 0: zero, 1: one, 2: two, 3: three, 4: four, 5: five };

export default class CardBack extends Component {
	generateRatingElement = () => {
		if (this.props.IMDBRating !== null) {
			return <img src={imgMapper[this.props.IMDBRating]} alt="" />;
		}
		return <h4>No Rating Found</h4>;
	};

	render() {
		return (
			<div className="card-back">
				<h3 className="title">{this.props.title}</h3>
				<span />
				{this.generateRatingElement()}
				<span />
				<h5 className="genres">{this.props.genres.join(', ')}</h5>
			</div>
		);
	}
}




import defaultPoster from '../assets/poster-imgs/default.png';
import cmi from '../assets/poster-imgs/choux-and-maru-go-to-istanbul.png';
import cmp1 from '../assets/poster-imgs/choux-and-maru-p1.png';
import cb from '../assets/poster-imgs/chromeboi.png';
import efv from '../assets/poster-imgs/escape-from-vim.png';
import goldeneye from '../assets/poster-imgs/goldeneye.jpg';
import hbmc from '../assets/poster-imgs/handsome-boy-modeling-club.png';
import msts from '../assets/poster-imgs/marus-spinoff-trapped-in-the-sheets.png';
import tkr from '../assets/poster-imgs/terrance-king-of-the-rats.png';
import ttm from '../assets/poster-imgs/the-trash-man.png';

import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';

const posterMap = {
	'choux-maru-istanbul': cmi,
	'choux-maru-part-1': cmp1,
	chromeboi: cb,
	'escape-from-vim': efv,
	goldeneye: goldeneye,
	'handsome-boy': hbmc,
	'marus-spinoff': msts,
	'terrance-king': tkr,
	'the-trash-man': ttm,
	default: defaultPoster
};

export default class MovieCard extends Component {
	render() {
		return (
			<div className="movie-card">
				<CardFront poster={posterMap[this.props.poster]} />
				<CardBack
					title={this.props.title}
					IMDBRating={this.props.IMDBRating}
					genres={this.props.genres}
				/>
			</div>
		);
	}
}

MovieCard.defaultProps = {
	title: 'Unknown',
	IMDBRating: null,
	genres: ['No Genre(s) Found'],
	poster: 'default'
};