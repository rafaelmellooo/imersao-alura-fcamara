import React from 'react';

import logo from '../assets/logo.png';

import '../styles/header.scss';

function Header()
{
    return (
        <header>
            <a href="/" target="_blank">
                <img src={logo} alt="Logo da FCamara" />
            </a>

            <nav>
                <ul>
                    <li><a href="/" target="_blank">quem somos</a></li>
                    <li><a href="/" target="_blank">nossa atuação</a></li>
                    <li><a href="/" target="_blank">cases</a></li>
                    <li><a href="/" target="_blank">carreira</a></li>
                    <li><a href="/" target="_blank">programa de formação</a></li>
                    <li><a href="/" target="_blank">blog</a></li>
                    <li><a href="/" target="_blank">contato</a></li>
                </ul>
            </nav>

            <h3><a href="/" target="_blank">PT</a> / <a href="/" target="_blank">EN</a></h3>
        </header>
    );
}

export { Header };