import { useEffect, useState } from 'react';
import * as gamesService from '../../services/gamesService'
import { useNavigate, useParams } from 'react-router-dom';


export const EditGame = () => {

    const redirect = useNavigate();
    const {gameId} = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        gamesService.getGameDetails(gameId)
        .then(setGame)
        .catch (err => {
            throw err;
        })
    }, [gameId])

    const [name, setName] = useState(game.name);
    const [category, setCategory] = useState(game.category);
    const [date, setDate] = useState(game.date);
    const [imageUrl, setImageUrl] = useState(game.imageUrl);
    const [platform, setPlatform] = useState(game.platform);
    const [mode, setMode] = useState(game.mode);
    const [description, setDescripton] = useState(game.description);   

    const onGameSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            category: category,
            date: date,
            imageUrl: imageUrl,
            platform: platform,
            mode: mode,
            description: description
        }
        gamesService.editGame(data)
        .then(() => {
            redirect('/games')
        })      
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
                                <input type="text" id="name" className="form-control border-0" style={{height: 55}} defaultValue={game.name}  onChange={(e) => {setName(e.target.value)}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="category">Game Category</label>
                            <select id="category" className="form-control border-0 select" style={{height: 55}} defaultValue={game.category}  onChange={(e) => {setCategory(e.target.value)}}>
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
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="date">Release Date</label>
                                <input id="date" type="date" className="form-control border-0" style={{height: 55}} defaultValue={game.date}  onChange={(e) => {setDate(e.target.value)}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="imageUrl">Image URL</label>
                                <input type="text" id="imageUrl" className="form-control border-0" style={{height: 55}} defaultValue={game.imageUrl}  onChange={(e) => {setImageUrl(e.target.value)}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="platform">Select a platform</label>
                                <select id="platform" className="form-control border-0 select" style={{height: 55}} value={game.platform}  onChange={(e) => {setPlatform(e.target.value)}}>
                                    <option value="">--Please choose a platform--</option>
                                    <option value="PC">PC</option>
                                    <option value="PS3">PS3</option>
                                    <option value="PS4">PS4</option>
                                    <option value="Xbox">Xbox</option>
                                    <option value="Nintendo Switch">Nintendo Switch</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="mode">Select Mode</label>
                                <select id="mode" className="form-control border-0 select" style={{height: 55}} value={game.mode}  onChange={(e) => {setMode(e.target.value)}}>
                                    <option value="">--Please choose mode--</option>
                                    <option value="Singleplayer">Singleplayer</option>
                                    <option value="Multiplayer">Multiplayer</option>
                                </select>
                            </div>
                            <div className="col-12">
                            <label className="newGameLbl" htmlFor="description">Game Description</label>
                                <textarea className="form-control border-0" rows="5" defaultValue={game.description} onChange={(e) => {setDescripton(e.target.value)}}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}