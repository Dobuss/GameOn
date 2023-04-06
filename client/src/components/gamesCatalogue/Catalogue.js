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
    const [filteredList, setFilteredList] = useState('');
    const [searchValue, setSearchValue] = useState(false);
    
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

    const onFilter = (e) => {
        const query = e.target.value;
        if(query){
            setSearchValue(true);
            setFilteredList(games.filter((item) => item.category === query));
        } else {
            setSearchValue(false)
            setFilteredList(games)
        }
    }


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
            <h1 className={styles.browseGamesHeading}>Browse all <span className={styles.highlight}>Games</span></h1>
            <h2 className={styles.findGamesHeading}>or</h2>
            <h1 className={styles.findGamesHeading}>Find <span className={styles.highlight}>Games </span>by category</h1>
            <select name="category" className={styles.select}
                            onChange={onFilter}>
                                    <option value="">--Please choose category--</option>
                                    <option value="Action-adventure">Action-adventure</option>
                                    <option value="Multiplayer online battle arena (MOBA)">Multiplayer online battle arena (MOBA)</option>
                                    <option value="Platform">Platform</option>
                                    <option value="Real-time strategy (RTS)">Real-time strategy (RTS)</option>
                                    <option value="Role-playing (RPG, ARPG, and More)">Role-playing (RPG, ARPG, and More)</option>
                                    <option value="Sandbox">Sandbox</option>
                                    <option value="Shooter (FPS and TPS)">Shooter (FPS and TPS)</option>
                                    <option value="Simulation and sports">Simulation and sports</option>
                                    <option value="Survival and horror">Survival and horror</option>
                                    <option value="Puzzles and party games">Puzzles and party games</option>
                                </select>
            {games?.length === 0 && 
            <>
            <h1 className={styles.browseGamesHeading}>Seems like there are no <span className={styles.highlight}>games</span> in our database</h1>  
            <h2 className={styles.browseGamesHeading}>You can <span className={styles.highlight}>login / register</span> and start adding games!</h2></>}   
        </div>
        <div className={styles.gamesSection}>
            {filteredList.length === 0 && !searchValue && games?.map(g => <Game key={g._id} game={g}/>)}
            {filteredList.length === 0 && searchValue && <p className={styles.noGames}>There are no games in our database that match your search.</p>}
            {filteredList.length > 0 && filteredList.map(g => <Game key={g._id} game={g}/>)}
        </div>
    </section>
    </>
    );
}