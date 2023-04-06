import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as gamesService from '../../../services/gamesService';
import * as commentsService from '../../../services/commentsService';
import { DeletionMessage } from '../modals/DeletionMessage';
import { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';
import styles from './GameDetails.module.css'

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
    .catch(err => {
        return redirect('*')
    })
}, [gameId, redirect])

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
    <div className={styles.container}>
        <div className={styles.contentWrapper}>
            <div className={styles.contentBox}>
                <h1 className={styles.gameTitle}><span className={styles.highlight}>{game.name}</span></h1>
                <img className={styles.img} src={game.imageUrl} alt="gameImage"/>
                <section className="game-info">
                    <h3 className={styles.highlight}>Category</h3>
                    <p className={styles.paragraph}>{game.category}</p>
                    <h3 className={styles.highlight}>Platform</h3>
                    <p className={styles.paragraph}>{game.platform}</p>
                    <h3 className={styles.highlight}>Mode</h3>
                    <p className={styles.paragraph}>{game.mode}</p>
                    <h3 className={styles.highlight}>Description</h3>
                    <p className={styles.paragraph}>{game.description}</p>
                    <h3 className={styles.highlight}>Release Date</h3>
                    <p className={styles.paragraph}><i className={`far fa-calendar-alt ${styles.highlight}`}></i> {game.date}</p>
                    <h3 className={styles.highlight}>Liked by</h3>
                    <p className={styles.paragraph}>{game.likes} users</p>
                </section>
                <h3 className={styles.highlight}>Comments</h3>
                {comments.map(x => (
                    <div className="game-info" key={x._id}>
                        <p className={styles.paragraph} style={{border: '1px solid #fd5d14'}}>{x.author}: {x.comment}</p>
                         </div>
                ))}
                {comments.length === 0 && (
                    <p className={styles.paragraph}>No comments yet.</p>
                )}
                <div className={styles.btnContainer}>
                {!isOwner && !hasLiked && 
                    <button className={styles.btn} onClick={onGameLike}><i className={`far fa-heart ${styles.highlight}`}></i> Like Game </button>
                }
                    <Link className={styles.btn} to={`/comments/${gameId}`}><i className={`far fa-comments ${styles.highlight}`}></i> Comment </Link>
                    {isOwner &&
                        <>
                        <Link className={styles.btn} to={`/games/${gameId}/edit`}><i className={`far fa-edit ${styles.highlight}`}></i> Edit </Link>
                        <button className={styles.btn} onClick={() => setShowDeleteMessage(true)}><i className={`far fa-trash-alt ${styles.highlight}`}></i> Delete </button>
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