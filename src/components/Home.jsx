import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home() {
const [data, setData] = useState([]);
useEffect( () => {
axios.get('https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes')
.then( res => setData(res.data) )
.catch( err => console.log(err) );
}, [] );

// Função para apagar um registro:
const handleDelete = (id) => {

const confirm = window.confirm("Quer mesmo apagar este usuário?");
if(confirm) {

axios.delete(`https://6adbb7ab3b7e90b82090282a.mockapi.io/Filmes/${id}`)
.then(() => {

setData( prevData => prevData.filter(user => user.id !== id) );
})
.catch(err => console.log(err));
}
}

return (
<div className='d-flex flex-column justify-content-center
align-items-center bg-light vh-100'>
<h1>Lista de Filmes</h1>
<div className='w-75 rounded bg-white border shadow p-4'>

<div className='d-flex justify-content-end'>
<Link to="/create" className='btn btn-success'>NOVO</Link>
</div>

<table className='table table-striped'>
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Genero</th>
<th>Ano</th>
</tr>
</thead>
<tbody>
{
data.map( (d,i) => (
<tr key={i}>
<td>{d.id}</td>
<td>{d.nome}</td>
<td>{d.genero}</td>
<td>{d.ano}</td>
<td>
<Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Ler</Link>
<Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Editar</Link>
<button onClick={ e => handleDelete(d.id) } className='btn btn-sm btn-danger'>Apagar</button>
</td>
</tr>
) )
}
</tbody>
</table>
</div>
</div>
)





}
export default Home