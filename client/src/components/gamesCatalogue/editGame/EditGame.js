import { useEffect, useState } from 'react';
import * as gamesService from '../../../services/gamesService'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from "react";
import { FormValidatorContext } from '../../../contexts/FormValidatorContext';


export const EditGame = () => {
    const {GameValidator, errors} = useContext(FormValidatorContext);
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
            redirect('/games')
        }) 
    }

    const cancelHandler = (e) => {
        e.preventDefault();
        redirect(`/games/${state._id}`)
    }

    return (
        <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4">Edit <span className="text-primary">your game</span> and make it better</h1>
                </div>
                <p className="mb-5" style={{fontSize: 30}}>Thank you for keeping our database up-to-date! <i className="far fa-smile-beam"></i></p>
            </div>
            <div className="col-lg-8">
                <div className="bg-light text-center p-5">
                    <form onSubmit={onGameSubmit}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <label className="newGameLbl" htmlFor="name">Game Name</label>
                                <input type="text" name="name" className="form-control border-0" 
                                style={{height: 55}} 
                                value={state.name}
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.name}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="category">Game Category</label>
                            <select name="category" className="form-control border-0 select" 
                            style={{height: 55}} 
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
                                <p className="errors">{errors?.category}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="date">Release Date</label>
                                <input name="date" type="date" className="form-control border-0" 
                                style={{height: 55}} 
                                value={state.date} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.date}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="imageUrl">Image URL</label>
                                <input type="text" name="imageUrl" className="form-control border-0" 
                                style={{height: 55}} 
                                value={state.imageUrl}
                                onBlur = {GameValidator} 
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.imageUrl}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="platform">Select a platform</label>
                                <select name="platform" className="form-control border-0 select" 
                                style={{height: 55}} 
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
                                <p className="errors">{errors?.platform}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="mode">Select Mode</label>
                                <select name="mode" className="form-control border-0 select" 
                                style={{height: 55}} 
                                value={state.mode} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}>
                                    <option value="">--Please choose mode--</option>
                                    <option value="Singleplayer">Singleplayer</option>
                                    <option value="Multiplayer">Multiplayer</option>
                                </select>
                                <p className="errors">{errors?.mode}</p>
                            </div>
                            <div className="col-12">
                            <label className="newGameLbl" htmlFor="description">Game Description</label>
                                <textarea name="description" className="form-control border-0" rows="5" 
                                value={state.description} 
                                onBlur = {GameValidator}
                                onChange={onChangeHandler}></textarea>
                                <p className="errors">{errors?.description}</p>
                            </div>
                            <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit">Submit</button>
                            <p></p>
                            <button className="btn btn-primary w-100" type="button" onClick={cancelHandler}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}