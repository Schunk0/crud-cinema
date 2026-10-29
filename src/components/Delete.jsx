import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Delete({ filme }) {

    const [values, setValues] = useState(filme);

    const navigate = useNavigate();


    const handleDelete = (event) => {
        event.preventDefault();
        const confirm = window.confirm("Quer mesmo apagar este usuário?");
        if (confirm) {
            axios.delete('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + values.id)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
                <h1>Deletar Filme</h1>
                    
                    <div className='mb-2'>
                        <strong>Nome: </strong> {values.nome}
                    </div>
                    <div className='mb-2'>
                        <strong>Gênero: </strong> {values.genero}
                    </div>
                    <div className='mb-3'>
                        <strong>Ano: </strong> {values.ano}
                    </div>
                    <button onClick={handleDelete} className='btn btn-success'>Deletar</button>
                    <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
            </div>
        </div>
    )
}
export default Delete