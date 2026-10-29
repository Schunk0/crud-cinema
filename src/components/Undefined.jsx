import React from 'react';
import { Link } from 'react-router-dom';

function Undefined() {
  return (
    <div className="container pb-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <div className="card shadow-sm border-0 mt-5 p-5">
                    <h1 className="error-404-title text-primary fw-bolder" style={{ fontSize: '5rem' }}>404</h1>
                    <h2 className="fw-bold mt-3">Página não encontrada</h2>
                    <p className="text-muted mt-2 mb-4">
                        Ops! O filme ou a página que procura não existe no nosso catálogo.
                    </p>
                    <div>
                        <Link to="/" className="btn btn-primary px-4 py-2">Voltar para o Início</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Undefined;