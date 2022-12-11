// import PropTypes from 'prop-types';
import css from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
    return (
        <section className={css.section}>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </section>
    );
}

// ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Layout;