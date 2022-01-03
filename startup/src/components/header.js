import React from 'react';
import '../style/header.css';

function Header() {
  return (
    <div className="Header">
      <header id="topnav">
        <div class="inner">
          <div class="logo"><a href="/">logo</a></div>
          <nav role='navigation'>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/produit">Nos produits</a></li>
              <li><a href="/equipe">Notre équipe</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;