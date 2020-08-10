/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';

import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

const CadastroVideo = () => {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);

    const { handleChange, values } = useForm({
        titulo: 'Vídeo Padrão',
        url: 'https://www.youtube.com/watch?v=VPRjCeoBqrI',
        categoria: 'Front End',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((resp) => {
                setCategorias(resp);
            });
    }, []);

    return (
        <PageDefault>
            Cadastro de Vídeos

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaIdEscolhida = categorias
                    .find((categoria) => categoria.titulo === values.categoria);

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaIdEscolhida.id,
                }).then(() => {
                    history.push('/');
                });
            }}
            >
                <FormField
                    label="Título do Vídeo: "
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL do Vídeo: "
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria do Vídeo: "
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
};

export default CadastroVideo;
