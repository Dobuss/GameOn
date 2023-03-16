import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as gamesService from '../../services/gamesService';

export const GameDetails = () => {

    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const redirect = useNavigate();

    useEffect(() => {
        gamesService.getGameDetails(gameId)
        .then(setGame)
        .catch (err => {
            throw err;
        })
    }, [gameId])

    const onGameDelete = (e) => {
        e.preventDefault();
        gamesService.deleteGame(gameId)
        .then(() => {
            redirect('/games')
        })
        .catch(err => {
            throw err;
        })
    }

   return (
    <div className="container-fluid py-6 px-5" style={{maxWidth: '50vw'}}>
        <div className="row g-5">
            <div className="game-info text-center bg-light" style={{border: '5px groove #FD5D14'}}>
                <h1 className="display-5 text-uppercase mb-4"><span className="text-primary">{game.name}</span></h1>
                <img className="img-fluid" src={game.imageUrl} alt=""/>
                <div className="game-info">
                    <h3 className='text-primary'>Category</h3>
                    <p className='fw-bold mb-2'>{game.category}</p>
                    <h3 className='text-primary'>Platform</h3>
                    <p className='fw-bold mb-2'>{game.platform}</p>
                    <h3 className='text-primary'>Mode</h3>
                    <p className='fw-bold mb-2'>{game.mode}</p>
                    <h3 className='text-primary'>Description</h3>
                    <p className='fw-bold mb-2'>{game.description}</p>
                    <h3 className='text-primary'>Release Date</h3>
                    <p className='ms-3 fw-bold mb-2'><i className="far fa-calendar-alt text-primary me-2"></i>{game.date}</p>
                </div>
                <div className="mt-4">
                    <Link style={{fontSize: 24}} className="text-uppercase fw-bold btn" to="/"><i className="far fa-heart text-primary"></i> Like Game </Link>
                    <Link style={{fontSize: 24}} className="text-uppercase fw-bold btn" to="/"><i className="far fa-comments text-primary"></i> Comment </Link>
                    <Link style={{fontSize: 24}} className="text-uppercase fw-bold btn" to={`/games/${gameId}/edit`}><i className="far fa-edit text-primary"></i> Edit </Link>
                    <button style={{fontSize: 24}} className="text-uppercase fw-bold btn" onClick={onGameDelete}><i className="far fa-trash-alt text-primary"></i> Delete </button>
                </div>
            </div>
        </div>
    </div>
    );
}