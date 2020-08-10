/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Button from '../Button';

import './Menu.css';

const Menu = () => (
    <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={logo} alt="RiltonFlix" />
        </Link>

        <Link to="/cadastro/videos">
            <Button className="ButtonLink">
                Novo vídeo
            </Button>
        </Link>
    </nav>
);

export default Menu;
