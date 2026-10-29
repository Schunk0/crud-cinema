import React from 'react';
import { Link } from 'react-router-dom';

function FilmeForm({ values, setValues, onSubmit, textoBotao }) {
    return (
        <form onSubmit={onSubmit}>
            <div className='mb-2'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name='nome' className='form-control'
                    placeholder='Digite o nome'
                    value={values.nome}
                    onChange={e => setValues({ ...values, nome: e.target.value })}
                    required
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="genero">Gênero:</label>
                <input type="text" name='genero' className='form-control'
                    placeholder='Digite o gênero'
                    value={values.genero}
                    onChange={e => setValues({ ...values, genero: e.target.value })}
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="ano">Ano:</label>
                <input type="text" name='ano' className='form-control'
                    placeholder='Digite o ano'
                    value={values.ano}
                    onChange={e => setValues({ ...values, ano: e.target.value })}
                    required
                />
            </div>
            <button className='btn btn-success'>{textoBotao}</button>
            <Link to="/" className='btn btn-primary ms-3'>Cancelar</Link>
        </form>
    );
}

export default FilmeForm;