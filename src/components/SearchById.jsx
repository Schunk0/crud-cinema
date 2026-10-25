import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Undefined from './Undefined.jsx';

function SearchById({ pageToRender }) {

    const [id, setId] = useState('');

    const [mostrarUpdate, setMostrarUpdate] = useState(false);
    const [mostrarUndefined, setMostrarUndefined] = useState(false);

    const [filme, setFilme] = useState({
        id: '',
        nome: '',
        genero: '',
        ano: ''
    });

    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        axios.get('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + id)
            .then(res => {
                setFilme(res.data);
                setMostrarUpdate(true);
            })
            .catch(err => {
                setMostrarUndefined(true);
                <Undefined />;});
    }

return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                {mostrarUpdate ? (
                    pageToRender(filme)
                ) : mostrarUndefined ? (
                    <Undefined />
                ) : (
                    <>
                        <h1>Qual filme você deseja buscar?</h1>
                        <form onSubmit={handleSearch}>
                            <div className='mb-2'>
                                <label htmlFor="nome">Id:</label>
                                <input type="text" name='nome' className='form-control'
                                    placeholder='Digite o id'
                                    onChange={e => setId(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success'>Buscar</button>
                            <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
    // return (
    //     <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    //         <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
    //             {mostrarUpdate ? (pageToRender(filme)) :
    //                 (<>
    //                     <h1>Qual filme você deseja buscar?</h1>
    //                     <form onSubmit={handleSearch}>
    //                         <div className='mb-2'>
    //                             <label htmlFor="nome">Id:</label>
    //                             <input type="text" name='nome' className='form-control'
    //                                 placeholder='Digite o id'
    //                                 onChange={e => setId(e.target.value)}
    //                             />
    //                         </div>
    //                         <button className='btn btn-success'>Buscar</button>
    //                         <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
    //                     </form>
    //                 </>)}
    //         </div>
    //     </div>
    // )
}
export default SearchById