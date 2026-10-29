import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilmeForm from './FilmeForm'; 

function Create() {
    const [values, setValues] = useState({
        nome: '',
        genero: '',
        ano: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes', values)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className="container pb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    
                    <div className="card shadow-sm border-0 mt-3">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                            <h3 className="fw-bold mb-0">Adicionar Filme</h3>
                            <p className="text-muted small mt-1">Preencha os dados para registrar um novo título.</p>
                        </div>
                        <div className="card-body p-4">
                            <FilmeForm 
                                values={values} 
                                setValues={setValues} 
                                onSubmit={handleSubmit} 
                                textoBotao="Salvar Filme" 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Create;