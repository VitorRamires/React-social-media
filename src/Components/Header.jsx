import React from 'react';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Homepage">
          <img className={styles.logo} src={Dogs} />
        </Link>
        {data ? (
          <Link to="Conta" aria-label="minha-conta page" className={styles.login}>
            {<p>{data.nome}</p>}
          </Link>
        ) : (
          <Link to="Login" aria-label="Login page" className={styles.login}>
            <p>Login</p>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
