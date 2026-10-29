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
        <div>
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
                            {data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td> <Link to={`/read/${d.id}`}>{d.nome}</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home