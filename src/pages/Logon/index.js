import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logo-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua id" ></input>
                    <button className="button" type='submit'>Entrar</button>

                    <a href="/registe">
                        <FiLogIn size={16} color="E02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    );
}