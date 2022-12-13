import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    const { poster_path, original_title, vote_average, overview, genres, } = movie;
    const defaultImage = "https://eshop.spartan.gr/images/virtuemart/product/noimage.jpg";

    return (
        <div  className={css.card}>
            <img src={ poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : defaultImage } alt="movie poster" width={300}/>
            <div className={css.info}>
                <h3 className={css.title}>{original_title}</h3>
                <p className={css.text}>User score: {Math.round(vote_average * 10)}%</p>
                <h4 className={css.overview}>Overview</h4>
                <p className={css.text}>{overview}</p>
                <h5 className={css.genres}>Genres</h5>
                <p className={css.text}>{genres.map(item => item.name).join(' ')}</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string,
        })
    ),
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
};

export default MovieCard;