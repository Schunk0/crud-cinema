import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update({filme}) {

    //const { id } = useParams();

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
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name='nome' className='form-control'
                            placeholder='Digite o nome'
                            value={values.nome}
                            onChange={e => setValues({ ...values, nome: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="genero">Gênero:</label>
                        <input type="text" name='genero' className='form-control'
                            placeholder='Digite o gênero'
                            value={values.genero}
                            onChange={e => setValues({ ...values, genero: e.target.value })}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="ano">Ano:</label>
                        <input type="text" name='ano' className='form-control'
                            placeholder='Digite o ano'
                            value={values.ano}
                            onChange={e => setValues({ ...values, ano: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-success'>Atualizar</button>
                    <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
                </form>
            </div>
        </div>
    )
}
export default Update