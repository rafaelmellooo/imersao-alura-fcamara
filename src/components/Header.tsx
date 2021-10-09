import React from 'react';

import '../styles/header.scss';

function Header()
{
    return (
        <header>
            <img src="" alt="Logo da FCamara" />

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
        </header>
    );
}

export { Header };