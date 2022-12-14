import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { geCast } from '../../service/api';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
    const [casts, setCasts] = useState([]);
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
    
    return (
        <>
            {loading && <Loader />}
            {!casts && <h2>We don't have a list of actors for this movie</h2> }
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
        </>
    );
};

export default Cast;