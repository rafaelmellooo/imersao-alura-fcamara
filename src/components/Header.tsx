import React from 'react';

import logo from '../assets/logo.png';

import '../styles/header.scss';

function Header() {
    return (
        <header>
            <a href="/" target="_blank">
                <img src={logo} alt="Logo da FCamara" />
            </a>

            <nav>
                <ul>
                    <li><a href="https://www.fcamara.com.br/quem-somos" target="_blank" rel="noreferrer">quem somos</a></li>
                    <li><a href="/" target="_blank">nossa atuação</a></li>
                    <li><a href="https://www.fcamara.com.br/casos-de-sucesso" target="_blank" rel="noreferrer">cases</a></li>
                    <li><a href="https://jobs.kenoby.com/fcamara/" target="_blank" rel="noreferrer">carreira</a></li>
                    <li><a href="https://www.fcamara.com.br/programa-formacao" target="_blank" rel="noreferrer">programa de formação</a></li>
                    <li><a href="https://blog.fcamara.com.br/" target="_blank" rel="noreferrer">blog</a></li>
                    <li><a href="https://www.fcamara.com.br/contato" target="_blank" rel="noreferrer">contato</a></li>
                </ul>
            </nav>

            <h3><a href="/" target="_blank">PT</a> / <a href="/" target="_blank">EN</a></h3>
        </header>
    );
}

export { Header };