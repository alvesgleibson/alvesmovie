import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="alvesmovie-score-container">
            <p className="alvesmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="alvesmovie-score-count">{count} avaliações</p>
        </div>

    );

}

export default MovieScore;