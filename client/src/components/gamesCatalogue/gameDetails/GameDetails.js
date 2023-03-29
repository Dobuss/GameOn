import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as gamesService from '../../../services/gamesService';
import * as commentsService from '../../../services/commentsService';
import { DeletionMessage } from '../modals/DeletionMessage';
import { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';

export const GameDetails = () => {
    const {userId} = useContext(AuthContext);
    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const redirect = useNavigate();
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        gamesService.getGameDetails(gameId)
        .then(result => {
            setGame(result)
    })
}, [gameId])
    const isOwner = userId === game.owner;
    let hasLiked = game.likedBy?.includes(userId) ? true : false;

   useEffect(() => {
        commentsService.getComments()
        .then(result => {
            const data = result.filter(y => y.gameId === gameId);
            return setComments(data)
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

    const onGameLike = () => {
        const data = {
            userId: userId,
            likes: game.likes + 1,
            likedBy: userId,
        }
        gamesService.likeGame(game._id, data)
        setGame({...game, likes: data.likes, likedBy: data.likedBy})
        hasLiked = true;
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
                    <h3 className='text-primary'>Liked by</h3>
                    <p className='fw-bold mb-2'>{game.likes} users</p>
                </div>
                <h3 className='text-primary'>Comments</h3>
                {comments.map(x => (
                    <div className="game-info" key={x._id}>
                        <p className='fw-bold mb-2' style={{border: '1px solid var(--primary)'}}>{x.author}: {x.comment}</p>
                         </div>
                ))}
                {comments.length === 0 && (
                    <p className='fw-bold mb-2'>No comments yet.</p>
                )}
                <div className="mt-4">
                {!isOwner && !hasLiked && 
                    <button style={{fontSize: 24}} className="text-uppercase fw-bold btn" onClick={onGameLike}><i className="far fa-heart text-primary"></i> Like Game </button>
                }
                    <Link style={{fontSize: 24}} className="text-uppercase fw-bold btn" to={`/comments/${gameId}`}><i className="far fa-comments text-primary"></i> Comment </Link>
                    {isOwner &&
                        <>
                        <Link style={{fontSize: 24}} className="text-uppercase fw-bold btn" to={`/games/${gameId}/edit`}><i className="far fa-edit text-primary"></i> Edit </Link>
                        <button style={{fontSize: 24}} className="text-uppercase fw-bold btn" onClick={() => setShowDeleteMessage(true)}><i className="far fa-trash-alt text-primary"></i> Delete </button>
                        </>
                    }
                    
                </div>
            <DeletionMessage 
            show={showDeleteMessage}
            onClose={() => setShowDeleteMessage(false)}
            onConfirm={onGameDelete}/>
            </div>
        </div>
    </div>
    );
}