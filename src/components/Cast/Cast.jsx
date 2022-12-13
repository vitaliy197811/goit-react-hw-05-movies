import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { geCast } from '../../service/api';
// import { getReview } from '../../service/api';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
    const [casts, setCasts] = useState([]);
    // const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const renderCast = async () => {
            setLoading(true);
            try {
                setCasts(await geCast(id));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        renderCast();
    }, [id]);
    
    const defaultImage = "https://eshop.spartan.gr/images/virtuemart/product/noimage.jpg";
    
    // useEffect(() => {
    //     const renderReviews = async () => {
    //         setLoading(true);
    //         try {
    //             setReviews(await getReview(id));
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     renderReviews();
    // }, [id]);

    return (
        <>
            {loading && <Loader />}
            {casts && 
                <ul className={css.casts}>
                    {casts.map(({ id, character, name, profile_path }) => (
                        <li key={id} className={css.card}>
                            <img className={css.img} src={ profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : defaultImage } alt={name} />
                            <div className={css.name}>
                                <p className={css.item}>{character}</p>
                                <p className={css.item}>{name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            }
            {/* {reviews && 
                <ul className={css.reviews}>
                    {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <h2>Author: {author}</h2>
                        <p>{content}</p>
                    </li>
                    ))}
                </ul>
            } */}
        </>
    );
};

export default Cast;