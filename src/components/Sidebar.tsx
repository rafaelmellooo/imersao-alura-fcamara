import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { IoCloseCircle } from 'react-icons/io5';
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';
import { SiGlassdoor } from 'react-icons/si';

import '../styles/sidebar.scss';

interface SidebarProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ visible, setVisible }) => {
    return (
        <CSSTransition in={visible} timeout={200} classNames="sidebar" unmountOnExit>
            <div id="sidebar">
                <section>
                    <button type="button" onClick={() => setVisible(false)}><IoCloseCircle /></button>

                    <nav>
                        <ul>
                            <li><a href="https://www.fcamara.com.br/quem-somos">quem somos</a></li>
                            <li><a href="/">nossa atuação</a></li>
                            <li><a href="https://www.fcamara.com.br/casos-de-sucesso">cases</a></li>
                            <li><a href="https://jobs.kenoby.com/fcamara/">carreira</a></li>
                            <li><a href="https://www.fcamara.com.br/programa-formacao">programa de formação</a></li>
                            <li><a href="https://blog.fcamara.com.br/">blog</a></li>
                            <li><a href="https://www.fcamara.com.br/contato">contato</a></li>
                        </ul>
                    </nav>

                    <h3 id="languages"><a href="/" target="_blank">PT</a> / <a href="/" target="_blank">EN</a></h3>

                    <article>
                        <h4>
                            <a href="https://pt-br.facebook.com/grupofcamara/" target="_blank" rel="noreferrer"><FiFacebook /></a>
                            <a href="https://www.linkedin.com/company/fcamara-consulting-&-training/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                            <a href="https://www.instagram.com/grupo.fcamara/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                            <a href="https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw" target="_blank" rel="noreferrer"><FiYoutube /></a>
                            <a href="https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm" target="_blank" rel="noreferrer"><SiGlassdoor /></a>
                        </h4>
                    </article>
                </section>
            </div>
        </CSSTransition>
    );
}

export { Sidebar };