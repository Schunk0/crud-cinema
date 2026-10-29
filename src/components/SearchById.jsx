import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

    const handleSearch = (event) => {
        event.preventDefault();
        axios.get('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + id)
            .then(res => {
                setFilme(res.data);
                setMostrarUpdate(true);
            })
            .catch(err => {
                setMostrarUndefined(true)
            });
    }

    return (
        <div className="container pb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    {mostrarUpdate ? (
                        pageToRender(filme)
                    ) : mostrarUndefined ? (
                        <Undefined />
                    ) : (
                        <div className="card shadow-sm border-0 mt-4">
                            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                                <h3 className="fw-bold mb-0">Buscar Filme</h3>
                                <p className="text-muted small mt-1">Digite o ID do filme que deseja localizar.</p>
                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={handleSearch}>
                                    <div className='mb-4'>
                                        <label htmlFor="idPesquisa">ID do Filme:</label>
                                        <input type="text" id="idPesquisa" className='form-control'
                                            placeholder='Digite o ID'
                                            onChange={e => setId(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className='btn btn-success px-4'>Procurar</button>
                                    <Link to="/" className='btn btn-outline-secondary ms-3 px-4'>Cancelar</Link>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchById