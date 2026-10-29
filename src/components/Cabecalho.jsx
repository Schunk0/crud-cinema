import React from 'react';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-5">
            <div className="container">
                <Link className="navbar-brand fw-bold text-uppercase" to="/" style={{ letterSpacing: '1px' }}>Catálogo de Filmes</Link>
                
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Adicionar Filme</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/update">Alterar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/delete">Apagar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Cabecalho;