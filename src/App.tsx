import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css'

import { Movie_show } from './components/Movie_show';
import { AddButton } from './components/AddButton';
import { AddModal } from './components/AddModal';

interface Movies_shows {
    id: string;
    title: string;
    bannerUrl: string;
    platform: string;
    score: number;
}

function App() {

    const [movies, setMovies] = useState<Movies_shows[]>([]);
    const [shows, setShows] = useState<Movies_shows[]>([]);

    useEffect(() => {
        //axios('http://localhost:3333/games').then(response => {
            setMovies([
                    {
                        id: '1',
                        bannerUrl: 'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg',
                        title: 'The Hunger Games',
                        platform: './public/netflix.png',
                        score: 5
                    },
                    {
                        id: '2',
                        bannerUrl: 'https://media.fstatic.com/7XemKYH1XtxN4MkKaVz1fYJpYp4=/290x478/smart/media/movies/covers/2011/07/f8503d117d5560c07478c1fde344a4e8.jpg',
                        title: 'Ilha do Medo',
                        platform: './public/amazon.png',
                        score: 5
                    },
                    {
                        id: '3',
                        bannerUrl: 'https://f001.backblazeb2.com/file/papocine/2022/06/20220606-arremessando-alto-papo-de-cinema-cartaz.jpeg',
                        title: 'Arremessando alto',
                        platform: './public/amazon.png',
                        score: 2
                    },
                    {
                        id: '4',
                        bannerUrl: 'https://br.web.img3.acsta.net/pictures/22/06/21/10/53/0149602.jpg',
                        title: 'A garota da Foto',
                        platform: './public/netflix.png',
                        score: 2
                    },
                    {
                        id: '5',
                        bannerUrl: 'https://www.themoviedb.org/t/p/w500/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
                        title: 'Ataque dos Cães',
                        platform: './public/disney-plus.png',
                        score: 2
                    },
                    {
                        id: '6',
                        bannerUrl: 'https://br.web.img3.acsta.net/pictures/21/09/21/21/02/4154192.png',
                        title: 'O Culpado',
                        platform: './public/cinema.png',
                        score: 5
                    },
                    {
                        id: '7',
                        bannerUrl: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/01/21/09/2878626.jpg',
                        title: 'Nada a Esconder',
                        platform: './public/netflix.png',
                        score: 5
                    },
            ]);
            setShows([
                    {
                        id: '1',
                        bannerUrl: 'https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg',
                        title: 'La Casa de Papel',
                        platform: './public/netflix.png',
                        score: 5
                    },
                    {
                        id: '2',
                        bannerUrl: 'https://br.web.img3.acsta.net/pictures/21/11/16/14/35/2231192.jpg',
                        title: 'Arcane',
                        platform: './public/netflix.png',
                        score: 5
                    },
                    {
                        id: '3',
                        bannerUrl: 'https://br.web.img3.acsta.net/pictures/19/12/04/22/35/3436063.jpg',
                        title: 'Vikings',
                        platform: './public/netflix.png',
                        score: 2
                    },
                    {
                        id: '4',
                        bannerUrl: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
                        title: 'Game of Thrones',
                        platform: './public/cinema.png',
                        score: 2
                    },
                    {
                        id: '5',
                        bannerUrl: 'https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg',
                        title: 'Breaking Bad',
                        platform: './public/netflix.png',
                        score: 2
                    },
                    {
                        id: '6',
                        bannerUrl: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg',
                        title: 'Dark',
                        platform: './public/netflix.png',
                        score: 5
                    },
                    {
                        id: '7',
                        bannerUrl: 'https://static.tvtropes.org/pmwiki/pub/images/bcs.png',
                        title: 'Better Call Saul',
                        platform: './public/netflix.png',
                        score: 5
                    },
            ]);
        //});
    }, []);

    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
            <h1 className="text-4xl text-white font-black text-center">
                Seus filmes e séries.
            </h1>

            <Dialog.Root>
                <AddButton />

                <AddModal />
            </Dialog.Root>
            <hr className="mt-20 mb-5" style={{height: 5, color: 'white', width: '100%'}} />
            <h3 className="text-3xl text-white font-black text-center">Filmes</h3>
            <div className="grid grid-cols-6 gap-6 mt-16">
                {movies.map(movie => {
                    return (
                    <Movie_show
                        key={movie.id}
                        bannerUrl={movie.bannerUrl}
                        title={movie.title}
                        score={movie.score}
                        platform={movie.platform}
                    />
                    )
                })}
            </div>

            {/* a ideia é mostrar 2 linhas, clicando em mostrar mais, mostra o resto */}

            <hr className="mt-20 mb-5" style={{height: 5, color: 'white', width: '100%'}} />
            <h3 className="text-3xl text-white font-black text-center">Séries</h3>
            <div className="grid grid-cols-6 gap-6 mt-16">
                {shows.map(show => {
                    return (
                    <Movie_show
                        key={show.id}
                        bannerUrl={show.bannerUrl}
                        title={show.title}
                        score={show.score}
                        platform={show.platform}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default App;