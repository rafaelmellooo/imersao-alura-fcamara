import React from 'react';

import thumb from '../assets/home.svg';

import '../styles/home.scss';

const Home: React.FC = () => {
  return (
      <section id="home">
          <article id="thumb">
              <img src={thumb} alt="Pessoas comemorando" />
          </article>

          <article id="text">
              <h3>Olá desenvolvedores, gostaríamos de anunciar que:</h3>
              <h1>ESTAMOS DE VOLTA!</h1>
              <p>Nossos escritórios de São Paulo e Santos já podem receber nossos queridos desenvolvedores</p>
          </article>
      </section>
  );
}

export { Home };