import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import categoriasRepository from '../../../repositories/categorias';

const CadastroCategoria = () => {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '#000',
    };

    const { values, handleChange, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        categoriasRepository.getAll()
            .then(async (res) => {
                setCategorias([...res]);
            });
    }, []);

    return (
        <PageDefault>
            Cadastro de Categoria:
            {' '}
            {values.titulo}

            <form onSubmit={function handleSubmit(e) {
                e.preventDefault();
                categoriasRepository.create(values);
                setCategorias([...categorias, values]);
                clearForm(valoresIniciais);
            }}
            >
                <FormField
                    label="Título da Categoria: "
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição: "
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor: "
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.id}`}>{categoria.titulo}</li>
                ))}
            </ul>

            <Link to="/cadastro/categoria">
                Ir para home
            </Link>
        </PageDefault>
    );
};

export default CadastroCategoria;
