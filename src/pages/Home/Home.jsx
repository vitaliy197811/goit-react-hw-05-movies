import css from './Home.module.css';
import TrendingMooves from 'components/TrendingMooves/TrendingMooves';

const Home = () => {
    return (
        <div className={css.list}>
            <h1 className={css.title}>Trending today</h1>
            <TrendingMooves />
        </div>
    );
};

export default Home;