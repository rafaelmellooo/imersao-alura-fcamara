import React from 'react';

import thumb from '../assets/security.svg';

import '../styles/security.scss';

const Security: React.FC = () => {
  return (
      <section id="security">
          <h2>Segurança</h2>

          <article id="thumb">
              <img src={thumb} alt="Distanciamento social" />
          </article>

          <article id="info">
              <ul>
                  <li>Será medida a temperatura ao chegar no escritório.</li>
                  <li>Todos os consultores deverão usar máscaras dentro das acomodações dos escritórios.</li>
                  <li>Nas mesas existem adesivos sinalizando onde os #SangueLaranjas devem sentar, para que haja o distanciamento necessário.</li>
                  <li>Pessoas que estiverem sentindo algum sintoma não devem ir trabalhar presencialmente, a indicação é para que permaneçam em casa.</li>
                  <li>Os escritórios só podem comportar até 40% dos consultores, conforme a legislação.</li>
              </ul>
          </article>
      </section>
  );
}

export { Security };