import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function Read() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
                <h3>Detalhes do Filme</h3>
                <div className='mb-2'>
                    <strong>Nome: {data.nome}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Gênero: {data.genero}</strong>
                </div>
                <div className='mb-3'>
                    <strong>Ano: {data.ano}</strong>
                </div>
                <Link to={`/update/${id}`} className='btn btn-success'>Editar</Link>
                <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
            </div>
        </div>
    )
}
export default Read;