import React from 'react';

import map from '../assets/location.svg';

import '../styles/location.scss';

const Location: React.FC = () => {
  return (
      <section id="location">
          <article id="info">
            <h2>Localização</h2>

            <p><span className="font-bold">São Paulo</span><br />
                <span className="font-medium">
                    MATRIZ<br />
                    Rua Bela Cintra, 986 - 2º andar<br />
                    Consolação, São Paulo - SP
                </span>
            </p>
            <p><span className="font-bold">Santos</span><br />
                <span className="font-medium">
                    FILIAL<br />
                    Praça Dos Expedicionários, 19<br />
                    2º andar<br />
                    Gonzaga, Santos - SP
                </span>
            </p>
          </article>

          <article id="map">
              <img src={map} alt="Mapa" />
          </article>
      </section>
  );
}

export { Location };