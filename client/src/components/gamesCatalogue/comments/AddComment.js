import { useState } from 'react';
import * as commentsService from '../../../services/commentsService'
import { useNavigate, useParams } from 'react-router-dom';

export const AddComment = () => {
    const redirect = useNavigate();
    const {gameId} = useParams();
    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        await commentsService.createComment({
            gameId,
            comment,
            author
        })
        .then(redirect(`/games/${gameId}`))
    }

    const onCancel = () => {
        redirect(`/games/${gameId}`)
    }
    
    return (
        <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4">Add new <span className="text-primary">Comment</span> to the Game</h1>
                </div>
                <p className="mb-5" style={{fontSize: 30}}>We are happy to hear from you. <i className="far fa-smile-beam"></i></p>
            </div>
            <div className="col-lg-8">
        <div className="bg-light text-center p-5">
                    <form onSubmit={onCommentSubmit}>
                        <div className="row g-3">
                            <div className="col-12">
                                <label className="newGameLbl" htmlFor="author">Author</label>
                                <input type="text" id="author" className="form-control border-0" style={{height: 55}} value={author} onChange={(e) => setAuthor(e.target.value)}/>
                            </div>
                            <div className="col-12">
                            <label className="newGameLbl" htmlFor="description">Comment</label>
                                <textarea className="form-control border-0" id="description" rows="5" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                            </div>
                            <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Add Comment</button>
                            <p></p>
                            <button className="btn btn-primary w-100 py-3" type="button" onClick={onCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                </div>
                </div>
        );
    }

