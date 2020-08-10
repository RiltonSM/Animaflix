import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import PageDefault from '../../components/PageDefault';

import categoriasRepository from '../../repositories/categorias';

function Home() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        categoriasRepository.getAllwithVideos()
            .then((categoriasComVideos) => {
                setDadosIniciais(categoriasComVideos);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <PageDefault paddingAll="0">
            {dadosIniciais.length === 0 && <div>Loading</div>}

            {dadosIniciais.map((categoria, index) => {
                if (index === 0) {
                    return (
                        <React.Fragment key={categoria.id}>
                            <BannerMain
                                videoTitle={dadosIniciais[1].videos[0].titulo}
                                url={dadosIniciais[1].videos[0].url}
                                videoDescription=""
                            />
                            <Carousel
                                category={dadosIniciais[0]}
                            />
                        </React.Fragment>
                    );
                }
                return (
                    <Carousel
                        key={categoria.id}
                        category={categoria}
                    />
                );
            })}
        </PageDefault>
    );
}

export default Home;
