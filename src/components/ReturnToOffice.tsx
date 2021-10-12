import React from 'react';

import thumb from '../assets/returnToOffice.svg';

import '../styles/returnToOffice.scss';

const ReturnToOffice: React.FC = () => {
  return (
    <section id="return-to-office">
      <article id="info">
        <h2>Pronto para o retorno?</h2>
        <h3>O retorno ao escritório só é possível através de um sistema de agendamento, onde os #SangueLaranjas poderão optar qual escritório ir, além de escolher data e também a estação de trabalho demarcada com um número.</h3>
        <button type="button">AGENDAR AGORA</button>
      </article>

      <article id="thumb">
        <img src={thumb} alt="Avisos do retorno presencial" />
      </article>
    </section>
  );
}

export { ReturnToOffice };