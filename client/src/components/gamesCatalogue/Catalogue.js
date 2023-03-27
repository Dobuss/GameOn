import { useEffect, useState } from "react";
import * as gamesService from '../../services/gamesService';
import { Game } from './Game'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

export const Catalogue = () => {
    const {isAuthenticated} = useContext(AuthContext);
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
        <>
        <section className="container-fluid page-header">
            <h1 className="display-3 text-uppercase text-white mb-3">Games Catalogue</h1>
            {isAuthenticated && 
            <Link to="/new-game" className="btn btn-primary py-md-3 px-md-5 mt-2">Add new game</Link>
            }
        </section>
        <section className="container-fluid py-3 px-5">
        <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <h1 className="display-5 text-uppercase mb-4">Browse <span className="text-primary">Games</span></h1>
            {games?.length === 0 && 
            <>
            <h1 className="display-8 text-uppercase mb-5">Seems like there are no <span className="text-primary">games</span> in our database</h1>  
            <h2 className="display-8 text-uppercase mb-5">You can <span className="text-primary">login / register</span> and start adding games!</h2></>}   
        </div>
        <div className="row g-5">
            {games?.map(g => <Game key={g._id} game={g}/>)}
        </div>
    </section>
    </>
    );
}