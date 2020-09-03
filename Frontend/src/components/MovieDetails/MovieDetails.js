import React from "react";
import { Link } from "react-router-dom";
// import TextTruncate from "react-text-truncate";

const MovieDetails = ({ movie }) => {
	return (
		<div className='movieDetailCard mx-auto'>
			<div className='movieHeader'>
				<h2 className='text-light text-center text-uppercase font-weight-bold my-4'>
					{movie.title}
				</h2>
			</div>
			<div className='moviecard mt-4'>
				<div
					className='movie-poster'
					style={{
						backgroundImage: `url(http://image.tmdb.org/t/p/w200/${movie.poster_path})`
					}}
				/>
				<div id='movie-content'>
					<div className='movie-ratings'>
						<span className='star'>★</span>
						<span className='score'>{movie.vote_average}</span>
						<span className='score-out-of'>
							/ 10 <span className='text-primary'>({movie.vote_count})</span>
						</span>
					</div>
					<div className='movie-title'>
						<a
							className=' d-inline-block text-truncate'
							href='#!'
							target='_blank'
						>
							{movie.title}
						</a>
						<span className='movie-year'>{movie.release_date}</span>
					</div>
					<div className='movie-details'>
						<span className='movie-rating'>{movie.original_title}</span>
						<span className='movie-genre'>Action, Crime, Drama</span>
					</div>
					<div className='movie-castcrew'>
						<span className='title'>Director</span>
						<span className='name'> Lorem ipsum </span>
					</div>
					<div className='movie-castcrew'>
						<span className='title'>Writer</span>
						<span className='name'>consectetur adipisicing</span>
					</div>
					<div className='movie-castcrew'>
						<span className='title'>Cast</span>
						<span className='name'>
							Eaque perferendis, velit qua, Eaque perferendis
						</span>
					</div>
					<div className='movie-synopsis'>
						{movie.overview}
						{/* <TextTruncate
							line={10}
							element='a'
							truncateText='…'
							text={movie.overview}
						/> */}
					</div>
					<Link to='/movies/'>
						<button className='movie-detail-btn play-trailer' type='button'>
							Back
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
