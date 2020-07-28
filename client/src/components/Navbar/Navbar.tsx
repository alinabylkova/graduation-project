import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

interface Props {
  token: string;
  saveToken: (arg0: string) => void;
}

export const Navbar: React.FC<Props> = (props) => {
  const history = useHistory();

  const logout = () => {
    props.saveToken('');
    history.push('/');
  }

  if (props.token === '') {
    return (
      <header className="home__header">
        <Link className="header__title" to="/">
          Placeholder
        </Link>
        <Link className="header__link" to="/login/psychologist">
          Login as a psychologist
        </Link>
      </header>
    )
  } else {
    return (
      <header className="home__header">
        <Link className="header__title" to="/">
          Placeholder
        </Link>
        <button className="header__link" onClick={() => { logout() }}>Log out</button>
      </header>
    )
  }
}
