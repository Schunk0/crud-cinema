import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Delete({ filme }) {
    const navigate = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();
        const confirm = window.confirm("Quer mesmo apagar este filme?");
        if (confirm) {
            axios.delete('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + filme.id)
                .then(() => navigate('/'))
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="card shadow-sm border-0 mt-3 border-danger border-top border-3">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h3 className="fw-bold mb-0 text-danger">Apagar Filme</h3>
                <p className="text-muted small mt-1">Confirme os dados antes de excluir (esta ação é irreversível).</p>
            </div>
            <div className="card-body p-4">
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item px-0 py-2 border-0">
                        <span className="text-muted me-2">ID:</span>
                        <strong>{filme.id}</strong>
                    </li>
                    <li className="list-group-item px-0 py-2 border-0">
                        <span className="text-muted me-2">Nome:</span>
                        <strong>{filme.nome}</strong>
                    </li>
                    <li className="list-group-item px-0 py-2 border-0">
                        <span className="text-muted me-2">Gênero:</span>
                        <strong>{filme.genero}</strong>
                    </li>
                    <li className="list-group-item px-0 py-2 border-0">
                        <span className="text-muted me-2">Ano:</span>
                        <strong>{filme.ano}</strong>
                    </li>
                </ul>
                <button onClick={handleDelete} className='btn btn-danger px-4'>Confirmar Exclusão</button>
                <Link to="/" className='btn btn-outline-secondary ms-3 px-4'>Cancelar</Link>
            </div>
        </div>
    );
}

export default Delete;