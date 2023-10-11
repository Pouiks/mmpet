import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Accueil</Link>
    <Link className="navbar-brand" href="/pages/about">about</Link>
    <Link className="navbar-brand" href="/pages/monprofil">Mon profil</Link>
    <Link className="navbar-brand" href="/pages/Conversations">Mes conversations</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <Link href="/pages/signup">M'inscrire</Link>
      <div className="spacer"></div>
      <Link href="/pages/login">Me connecter</Link>
    </div>
  </div>
</nav>
</>
  )
}

Header.propTypes = {
}

export default Header