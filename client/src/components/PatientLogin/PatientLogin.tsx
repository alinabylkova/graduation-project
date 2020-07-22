import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PatientLogin.css';

export default function PatientLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event: any) => {
    // maybe not any?
    event.preventDefault();
    const obj: any = {
      username,
      password,
      email,
      gender,
    };
    fetch('/api/patients', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(obj),
    });
  };

  return (
    <>
      <header className="home__header">
        <Link className="header__title" to="/">Home</Link>
      </header>

      <main className="login__content">
        <section className="login__box">
          <h1 className="content__user">Sign in</h1>

          <form onSubmit={handleSubmit}>
            <input
              className="form__text"
              placeholder="Username"
              type="text"
              onChange={event => {
                setUsername(event.target.value);
              }}
            />
            <br />
            <input
              className="form__text"
              placeholder="Password"
              type="password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <br />
            <input className="form__submit" type="submit" value="Sign in" />
          </form>

        </section>
      </main>
    </>
  );
}