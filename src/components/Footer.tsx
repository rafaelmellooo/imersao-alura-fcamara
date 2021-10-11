import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';
import { SiGlassdoor } from 'react-icons/si';

import logo from '../assets/logo.dark.png';

import '../styles/footer.scss';

function Footer() {
    return (
        <footer>
            <section>
                <img src={logo} alt="Logo da FCamara" />

                <article>
                    <h3>Transformação cultural,<br />digital e cognitiva</h3>

                    <h4>
                        <a href="https://pt-br.facebook.com/grupofcamara/" target="_blank" rel="noreferrer"><FiFacebook /></a>
                        <a href="https://www.linkedin.com/company/fcamara-consulting-&-training/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                        <a href="https://www.instagram.com/grupo.fcamara/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                        <a href="https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw" target="_blank" rel="noreferrer"><FiYoutube /></a>
                        <a href="https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm" target="_blank" rel="noreferrer"><SiGlassdoor /></a>
                    </h4>

                    <p>© 2021 FCamara Formação e Consultoria.</p>
                    <p>Todos os direitos reservados.</p>
                </article>

                <article id="links">
                    <p><a href="https://www.fcamara.com.br/quem-somos" target="_blank" rel="noreferrer">quem somos</a></p>
                    <p><a href="https://www.fcamara.com.br/marcas-mercados" target="_blank" rel="noreferrer">marcas & mercados</a></p>
                    <p><a href="https://www.fcamara.com.br/servicos" target="_blank" rel="noreferrer">tecnologias</a></p>
                    <p><a href="https://www.fcamara.com.br/casos-de-sucesso" target="_blank" rel="noreferrer">cases</a></p>
                    <p><a href="https://www.fcamara.com.br/carreira" target="_blank" rel="noreferrer">carreira</a></p>
                    <p><a href="https://www.fcamara.com.br/programa-formacao" target="_blank" rel="noreferrer">programa de formação</a></p>
                    <p><a href="https://blog.fcamara.com.br/" target="_blank" rel="noreferrer">blog</a></p>
                    <p><a href="https://www.fcamara.com.br/contato" target="_blank" rel="noreferrer">contato</a></p>
                    <p><a href="https://fcamara-images.s3.amazonaws.com/site-fcamara/politica-privacidade.pdf" target="_blank" rel="noreferrer">política de privacidade</a></p>
                </article>

                <article id="location">
                    <p className="font-black">onde estamos</p>
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
            </section>
        </footer>
    );
}

export { Footer };