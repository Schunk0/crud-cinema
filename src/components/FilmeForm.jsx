import React from 'react';
import { Link } from 'react-router-dom';

function FilmeForm({ values, setValues, onSubmit, textoBotao }) {
    return (
        <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor="nome">Nome do Filme:</label>
                <input type="text" name='nome' className='form-control'
                    placeholder='Digite o nome'
                    value={values.nome}
                    onChange={e => setValues({ ...values, nome: e.target.value })}
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="genero">Gênero:</label>
                <input type="text" name='genero' className='form-control'
                    placeholder='Digite o gênero'
                    value={values.genero}
                    onChange={e => setValues({ ...values, genero: e.target.value })}
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor="ano">Ano de Lançamento:</label>
                <input type="text" name='ano' className='form-control'
                    placeholder='Digite o ano'
                    value={values.ano}
                    onChange={e => setValues({ ...values, ano: e.target.value })}
                    required
                />
            </div>
            <button className='btn btn-success px-4'>{textoBotao}</button>
            <Link to="/" className='btn btn-outline-secondary ms-3 px-4'>Cancelar</Link>
        </form>
    );
}

export default FilmeForm;