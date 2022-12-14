import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../service/api';
import Loader from 'components/Loader/Loader';
// import {toast} from 'react-toastify';
import css from './Reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const renderReviews = async () => {
            setLoading(true);
            try {
                setReviews(await getReview(id));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        renderReviews();
    }, [id]);

    if (reviews === 0) {
        <p>We don't have any reviews for this movie</p>
    }

    return (
        <>
            {loading && <Loader />}
            {!reviews && <h2>We don't have any reviews for this movie</h2> }
            {reviews && 
                <ul className={css.reviews}>
                    {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <h2>Author: {author}</h2>
                        <p>{content}</p>
                    </li>
                    ))}
                </ul>
            }
        </>
    );
};

export default Reviews;