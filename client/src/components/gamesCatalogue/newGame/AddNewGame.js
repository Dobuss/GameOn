import { useState } from 'react';
import * as gamesService from '../../../services/gamesService'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';
import { FormValidatorContext } from '../../../contexts/FormValidatorContext';
import styles from './AddNewGame.module.css'

export const AddNewGame = () => {

    const {userId} = useContext(AuthContext);
    const {GameValidator, errors} = useContext(FormValidatorContext);
    const redirect = useNavigate();
    const [serverError, setServerError] = useState(null);
    const [state, setState] = useState({
        name: "",
        category: "",
        date: "",
        imageUrl: "",
        platform: "",
        mode: "",
        description: "",
        owner: userId
    });

    const onChangeHandler = (e) => {
        setState(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }

    const onGameSubmit = (e) => {
        e.preventDefault();
        gamesService.saveGame(state)
        .then(() => {
            redirect('/games')
        })
        .catch (err => {
            setServerError(err.message);
        })  
    }
    return (
        <section className={styles.container}>
        <div className={styles.contentWrapper}>
            <div className={styles.col1}>
                    <h1 className={styles.heading}>Add a <span className={styles.highlight}>New Game</span> to our DATABASE</h1>
                <p className={styles.paragraph}>Thank you for helping us grow. <i className="far fa-grin-hearts"></i></p>
            </div>
            <div className={styles.col2}>
                <div className={styles.col2Wrapper}>
                    <form onSubmit={onGameSubmit}>
                        <div className={styles.form}>
                            <div className={styles.itemWrapper}>
                                <label className={styles.newGameLbl} htmlFor="name">Game Name</label>
                                <input type="text" name="name" className={styles.input} 
                                value = {state.name} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}/>
                                <p className={styles.errors}>{errors?.name}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="category">Game Category</label>
                            <select name="category" className={`${styles.select} ${styles.input}`}
                            value = {state.category}
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
                                value = {state.imageUrl} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}/>
                                <p className={styles.errors}>{errors?.imageUrl}</p>
                            </div>
                            <div className={styles.itemWrapper}>
                            <label className={styles.newGameLbl} htmlFor="platform">Select a platform</label>
                                <select name="platform" className={`${styles.select} ${styles.input}`}
                                value = {state.platform} 
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
                                value = {state.mode} 
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
                                <textarea className={styles.input} name="description" rows="5" 
                                value = {state.description}
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}></textarea>
                                <p className={styles.errors}>{errors?.description}</p>
                            </div>
                            <div className={styles.maxWidthWrapper}>
                                <p className={styles.errors}>{serverError}</p>
                                <button className={styles.btn} type="submit">Add Game</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}