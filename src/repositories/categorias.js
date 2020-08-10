import config from '../config/index';

const URL_CATEGORIAS = `${config.URL}/categorias`;
function getAllwithVideos() {
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then(async (res) => {
            if (res.ok) {
                const resposta = await res.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados');
        });
}

function getAll() {
    return fetch(`${URL_CATEGORIAS}`)
        .then(async (res) => {
            if (res.ok) {
                const resposta = await res.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados');
        });
}

function create(objetoDaCategoria) {
    return fetch(`${URL_CATEGORIAS}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDaCategoria),
    })
        .then(async (res) => {
            if (res.ok) {
                const resposta = await res.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados');
        });
}

export default {
    getAllwithVideos,
    getAll,
    create,
};
