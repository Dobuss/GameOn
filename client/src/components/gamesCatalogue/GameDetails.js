import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as gamesService from '../../services/gamesService';

export const GameDetails = () => {

    const {gameId} = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        gamesService.getGameDetails(gameId)
        .then(game => {
            setGame(game)
            })
        .catch (err => {
            throw err;
        })
    }, [gameId])

   return (
    <div className="container-fluid py-6 px-5">
        <div className="row g-5">
            <div className="game-info text-center" style={{border: '5px solid #FD5D14'}}>
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
                </div>
            </div>
        </div>
    </div>
    );
}