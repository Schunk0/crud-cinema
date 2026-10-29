import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container pb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">Filmes Disponíveis</h2>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <table className="table table-hover table-striped align-middle m-0">
                        <thead className="table-dark">
                            <tr>
                                <th className="ps-4">ID</th>
                                <th>Nome do Filme</th>
                                <th className="text-end pe-4">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={i}>
                                    <td className="ps-4 text-muted fw-bold">#{d.id}</td>       
                                    <td className="fw-semibold">{d.nome}</td>
                                    <td className="text-end pe-4">
                                        <Link to={`/read/${d.id}`} className="btn btn-sm btn-outline-dark">
                                            Ver Detalhes
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="text-center py-4 text-muted">
                                        Nenhum filme cadastrado no momento.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;