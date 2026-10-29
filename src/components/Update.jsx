import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilmeForm from './FilmeForm';

function Update({ filme }) {
    const [values, setValues] = useState(filme);
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + values.id, values)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className="card shadow-sm border-0 mt-3">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h3 className="fw-bold mb-0 text-primary">Editar Filme</h3>
                <p className="text-muted small mt-1">Atualize os dados do filme abaixo.</p>
            </div>
            <div className="card-body p-4">
                <FilmeForm
                    values={values}
                    setValues={setValues}
                    onSubmit={handleUpdate}
                    textoBotao="Atualizar Dados"
                />
            </div>
        </div>
    );
}

export default Update;