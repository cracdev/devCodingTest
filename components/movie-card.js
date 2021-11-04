import React from "react";
import Image from "next/image";
import { FiArrowUp,  FiArrowDown, FiStar } from "react-icons/fi";

function getRankIcon({rankUpDown}){
    // rankUpDown === '0' ? 'no change' : rankUpDown
    if (rankUpDown === '0') return 'no change'
    if(rankUpDown.indexOf('+') !== -1) { 
        return (
            <><FiArrowUp className="has-text-success" /> {rankUpDown}</>
        )
    } else {
        return (
            <><FiArrowDown className="has-text-danger" /> {rankUpDown}</>
        )
    }
}
function MovieCard({ movie }) {
    return (
        <div className="column is-4" id={movie.id}>
            <div className="card large">
                <div className="card-image has-text-centered">
                    <figure className="image is-8by11">
                        <Image src={movie.image} 
                        alt="Image" 
                        title="Image"
                        width={272}
                        height={374}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="is-size-4 is-4 no-padding no-margin"><strong>{movie.fullTitle}</strong></p>
                            <span className="is-size-6 is-flex is-align-items-center">{movie.rank || 'N/A'} ({getRankIcon(movie)})</span>
                        </div>
                    </div>
                    <div className="content">
                        <p className="is-flex is-align-items-center"><strong className="mr-2">IMDB Rating:</strong> <FiStar className="has-text-warning mr-1" />   {movie.imDbRating || 'N/A'}</p>
                        <p><strong>Crew:</strong> {movie.crew}</p>
                        <p><strong>Date:</strong> {movie.year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;