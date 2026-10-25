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

    // Função para apagar um registro:
    const handleDelete = (id) => {

        const confirm = window.confirm("Quer mesmo apagar este filme?");
        if (confirm) {

            axios.delete(`https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/${id}`)
                .then(() => {

                    setData(prevData => prevData.filter(filme => filme.id !== id));
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <header className="border border-dark-subtle shadow-sm py-4 bg-white text-center">

                    <h1 className="fw-bold mb-4 text-uppercase" style={{ letterSpacing: '1px' }}>
                        Catálogo de Filmes
                    </h1>

                    <nav className="nav justify-content-center">
                        <Link to='/' className="nav-link text-dark px-4 fs-5">
                            INÍCIO
                        </Link>
                        <Link to='/create' className="nav-link text-dark px-4 fs-5">
                            CRIAR
                        </Link>
                        <Link to='/update' className="nav-link text-dark px-4 fs-5">
                            ALTERAR
                        </Link>
                        <Link to='/delete' className="nav-link text-dark px-4 fs-5">
                            APAGAR
                        </Link>
                    </nav>

                </header>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>

                <div className='w-75 rounded bg-white border shadow p-4'>

                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.id}</td>       
                                            <td> <Link to={`/read/${d.id}`}>{d.nome}</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home