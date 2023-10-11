"use client"
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Header from '@/app/Components/Header/header'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../services/firebase';

const Login = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value)
    // const email = e.target.value
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    // const email = e.target.value
  }
// PENSER A PREVOIR UN CONTEXTE POUR ACCUEILLIR LA CONNEXION
// context.PROVIDER a englober pour avoir un contexte utilisateur.

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(app);
    try {
      const auth = getAuth(app); // Utilisez l'application initialisée
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      setUser(userCredential.user);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  }

  return (
    <>
    <Header />
    <div>Login</div>
    <Form.Control
        type="email"
        placeholder="Votre adresse mail"
        aria-label="Adresse mail"
        value={email}
        onChange={handleEmail}
        required


      />
      <br />
      <Form.Control
        type="password"
        placeholder="Mot de passe"
        aria-label="Mot de passe"
        value={password}
        onChange={handlePassword}
        required
      />
      <Button onClick={handleLogin }>Valider</Button>
      {user && <p>Connecté en tant que {user.email}</p>}
      {error && <p>Erreur : {error}</p>}
    </>
  )

}

Login.propTypes = {}

export default Login