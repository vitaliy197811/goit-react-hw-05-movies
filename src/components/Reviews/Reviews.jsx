import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../service/api';
import Loader from 'components/Loader/Loader';
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

    return (
        <>
            {loading && <Loader />}
            {reviews.total_pages === 0 && <p>We don't have any reviews for this movie</p> }
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