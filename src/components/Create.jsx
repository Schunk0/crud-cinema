import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
                <h1>Adicionar Filme</h1>
                <FilmeForm values={values} setValues={setValues} onSubmit={handleSubmit} textoBotao="Enviar" />
            </div>
        </div>
    )
}
export default Create;