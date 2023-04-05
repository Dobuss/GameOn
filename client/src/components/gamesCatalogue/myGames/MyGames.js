import { useEffect, useState } from "react";
import { Game } from '../newGame/Game'
import { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';
import * as gamesService from '../../../services/gamesService';
import styles from '../Catalogue.module.css'

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
        <section className={styles.containerHeader}>
            <h1 className={styles.sectionTitle}>My Games</h1>
        </section>
        <section className={styles.containerContent}>
        <div className={styles.browseGamesHeader}>
            <h1 className={styles.browseGamesHeading}>Browse <span className={styles.highlight}>Games</span></h1>
            {games?.length === 0 && 
            <h1 className={styles.browseGamesHeading}>Seems like you haven't added any <span className={styles.highlight}>games</span> to our database</h1>} 
        </div>
        <div className={styles.gamesSection}>
            {games?.map(g => <Game key={g._id} game={g}/>)}
        </div>
    </section>
    </>
    );
}

