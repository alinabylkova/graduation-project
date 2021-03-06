import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

interface Props {
  token: string;
  saveToken: (arg0: string) => void;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const logout = () => {
    props.saveToken('');
    history.push('/');
  };

  // eslint-disable-next-line react/destructuring-assignment
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
    );
  }
  return (
    <header className="home__header">
      <Link className="header__title" to="/">
        Placeholder
      </Link>
      <button type="submit" className="header__link" onClick={() => { logout(); }}>Log out</button>
    </header>
  );
};

export default Navbar;
