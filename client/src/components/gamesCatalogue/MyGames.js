import { useEffect, useState } from "react";
import { Game } from './Game'
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import * as gamesService from '../../services/gamesService';

export const MyGames = () => {
    const {userId} = useContext(AuthContext);
    const [games, setGames] = useState(null);

    useEffect(() => {
        gamesService
        .getMyGames(userId)
        .then(games => {
            setGames(games);
        })
        .catch((err) => {
            throw err;
        })
    }, [userId]);

    return (
        <>
        <section className="container-fluid page-header">
            <h1 className="display-3 text-uppercase text-white mb-3">My Games</h1>
        </section>
        <section className="container-fluid py-3 px-5">
        <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <h1 className="display-5 text-uppercase mb-4">Browse <span className="text-primary">Games</span></h1>
            {games?.length === 0 && 
            <h1 className="display-8 text-uppercase mb-5">Seems like you haven't added any <span className="text-primary">games</span> to our database</h1>} 
        </div>
        <div className="row g-5">
            {games?.map(g => <Game key={g._id} game={g}/>)}
        </div>
    </section>
    </>
    );
}

