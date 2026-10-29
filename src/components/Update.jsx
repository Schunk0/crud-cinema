import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FilmeForm from './FilmeForm';

function Update({ filme }) {

    const [values, setValues] = useState(filme);

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + values.id, values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
                <h1>Editar Filme</h1>
                <FilmeForm values={values} setValues={setValues} onSubmit={handleUpdate} textoBotao="Atualizar" />
            </div>
        </div>
    )
}

export default Update