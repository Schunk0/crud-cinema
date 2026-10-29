import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container pb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0 mt-4">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                            <h3 className="fw-bold mb-0">Detalhes do Filme</h3>
                            <p className="text-muted small mt-1">Ficha técnica completa.</p>
                        </div>
                        <div className="card-body p-4">
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item px-0">
                                    <span className="text-muted d-block small">ID no Sistema</span>
                                    <strong className="fs-5">#{data.id}</strong>
                                </li>
                                <li className="list-group-item px-0">
                                    <span className="text-muted d-block small">Nome</span>
                                    <strong className="fs-5">{data.nome}</strong>
                                </li>
                                <li className="list-group-item px-0">
                                    <span className="text-muted d-block small">Gênero</span>
                                    <strong className="fs-5">{data.genero}</strong>
                                </li>
                                <li className="list-group-item px-0">
                                    <span className="text-muted d-block small">Ano de Lançamento</span>
                                    <strong className="fs-5">{data.ano}</strong>
                                </li>
                            </ul>
                            <Link to="/" className='btn btn-primary px-4'>Voltar ao Início</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read;