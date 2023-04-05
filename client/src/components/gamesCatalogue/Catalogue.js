import { useEffect, useState } from "react";
import * as gamesService from '../../services/gamesService';
import { Game } from './newGame/Game'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Catalogue.module.css'

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
        <section className={styles.containerHeader}>
            <h1 className={styles.sectionTitle}> Catalogue</h1>
            {isAuthenticated && 
            <Link to="/new-game" className={styles.newGameBtn}>Add new game</Link>
            }
        </section>
        <section className={styles.containerContent}>
        <div className={styles.browseGamesHeader}>
            <h1 className={styles.browseGamesHeading}>Browse <span className={styles.highlight}>Games</span></h1>
            {games?.length === 0 && 
            <>
            <h1 className={styles.browseGamesHeading}>Seems like there are no <span className={styles.highlight}>games</span> in our database</h1>  
            <h2 className={styles.browseGamesHeading}>You can <span className={styles.highlight}>login / register</span> and start adding games!</h2></>}   
        </div>
        <div className={styles.gamesSection}>
            {games?.map(g => <Game key={g._id} game={g}/>)}
        </div>
    </section>
    </>
    );
}