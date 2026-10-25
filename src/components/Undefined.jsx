import React from 'react';
import { Link } from 'react-router-dom';

function Undefined() {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>
        Ops! O filme ou a página que você procura não existe no nosso catálogo.
      </p>
        <Link to="/" className="btn btn-primary ms-3">Voltar para o Início</Link>
    </div>
    </div>
  );
}

export default Undefined
