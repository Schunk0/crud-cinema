import React from 'react';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <div className="container mt-4 mb-4">
            <header className="border border-dark-subtle shadow-sm py-4 bg-white text-center rounded">
                <h1 className="fw-bold mb-4 text-uppercase" style={{ letterSpacing: '1px' }}>
                    Catálogo de Filmes
                </h1>
                <nav className="nav justify-content-center">
                    <Link to='/' className="nav-link text-dark px-4 fs-5">INÍCIO</Link>
                    <Link to='/create' className="nav-link text-dark px-4 fs-5">CRIAR</Link>
                    <Link to='/update' className="nav-link text-dark px-4 fs-5">ALTERAR</Link>
                    <Link to='/delete' className="nav-link text-dark px-4 fs-5">APAGAR</Link>
                </nav>
            </header>
        </div>
    );
}

export default Cabecalho;