import { useEffect, useState } from 'react';
import * as gamesService from '../../../services/gamesService'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from "react";
import { FormValidatorContext } from '../../../contexts/FormValidatorContext';
import styles from '../newGame/AddNewGame.module.css'


export const EditGame = () => {
    const {GameValidator, errors} = useContext(FormValidatorContext);
    const [serverError, setServerError] = useState(null);
    const redirect = useNavigate();
    const {gameId} = useParams();
    const [state, setState] = useState({
        name: "",
        category: "",
        date: "",
        imageUrl: "",
        platform: "",
        mode: "",
        description: ""
    });

  
    useEffect(() => {
        gamesService.getGameDetails(gameId)
        .then((data) => {
            setState(data)
        })
        .catch (err => {
            throw err;
        })
    }, [gameId])

    const onChangeHandler = (e) => {
        const input = e.target.value;
        setState({
            ...state, [e.target.name]: input
        })
    }


    const onGameSubmit = (e) => {
        e.preventDefault();
        gamesService.editGame(state)
        .then(() => {
            redirect(`/games/${gameId}`)
        })
        .catch(err => {
            setServerError(err.message);
        })
    }

    const cancelHandler = (e) => {
        e.preventDefault();
        redirect(`/games/${state._id}`)
    }

    return (
        <section className={styles.container}>
        <div className={styles.contentWrapper}>
            <div className={styles.col1}>
                    <h1 className={styles.heading}>Edit <span className={styles.highlight}>your game</span> and make it better</h1>
                <p className={styles.paragraph}>Thank you for keeping our database up-to-date! <i className="far fa-smile-beam"></i></p>
            </div>
            <div className={styles.col2}>
                <div className={styles.col2Wrapper}>
                    <form onSubmit={onGameSubmit}>
                        <div className={styles.form}>
                            <div className={styles.itemWrapper}>
                                <label className={styles.newGameLbl} htmlFor="name">Game Name</label>
                                <input type="text" name="name" className={styles.input}
                                value={state.name}
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}/>
                                <p className={styles.errors}>{errors?.name}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="category">Game Category</label>
                            <select name="category" className={`${styles.select} ${styles.input}`}
                            value={state.category}
                            onBlur = {GameValidator}
                            onChange={onChangeHandler}>
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
                                <p className={styles.errors}>{errors?.category}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="date">Release Date</label>
                                <input name="date" type="date" className={styles.input} 
                                value={state.date} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}/>
                                <p className={styles.errors}>{errors?.date}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="imageUrl">Image URL</label>
                                <input type="text" name="imageUrl" className={styles.input} 
                                value={state.imageUrl}
                                onBlur = {GameValidator} 
                                onChange={onChangeHandler}/>
                                <p className={styles.errors}>{errors?.imageUrl}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="platform">Select a platform</label>
                                <select name="platform" className={`${styles.select} ${styles.input}`} 
                                value={state.platform}
                                onBlur = {GameValidator} 
                                onChange={onChangeHandler}>
                                    <option value="">--Please choose a platform--</option>
                                    <option value="PC">PC</option>
                                    <option value="PS3">PS3</option>
                                    <option value="PS4">PS4</option>
                                    <option value="Xbox">Xbox</option>
                                    <option value="Nintendo Switch">Nintendo Switch</option>
                                </select>
                                <p className={styles.errors}>{errors?.platform}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="mode">Select Mode</label>
                                <select name="mode" className={`${styles.select} ${styles.input}`} 
                                style={{height: 55}} 
                                value={state.mode} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}>
                                    <option value="">--Please choose mode--</option>
                                    <option value="Singleplayer">Singleplayer</option>
                                    <option value="Multiplayer">Multiplayer</option>
                                </select>
                                <p className={styles.errors}>{errors?.mode}</p>
                            </div>
                            <div className={styles.maxWidthWrapper}>
                            <label className={styles.newGameLbl} htmlFor="description">Game Description</label>
                                <textarea name="description" className={styles.input} rows="5" 
                                value={state.description} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}></textarea>
                                <p className={styles.errors}>{errors?.description}</p>
                            </div>
                            <div className={styles.maxWidthWrapper}>
                            <p className={styles.errors}>{serverError}</p>
                            <button className={styles.btn} type="submit">Submit</button>
                            <p></p>
                            <button className={styles.btn} type="button" onClick={cancelHandler}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}