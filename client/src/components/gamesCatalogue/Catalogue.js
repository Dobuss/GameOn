import { useEffect, useState } from "react";
import * as gamesService from '../../services/gamesService';
import { Game } from './Game'

export const Catalogue = () => {

    const [games, setGames] = useState(null);

    useEffect(() => {
        gamesService
        .getGames()
        .then(games => {
            setGames(games);
        })
        .catch((err) => {
            throw err;
        });
    }, []);

    return (
        <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <h1 className="display-5 text-uppercase mb-4">Browse <span className="text-primary">Games</span></h1>
        </div>
        <div className="row g-5">

            {games?.map(g => <Game key={g._id} game={g}/>)}
        </div>
    </div>
    );
}