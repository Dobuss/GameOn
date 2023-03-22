import { useState } from 'react';
import * as commentsService from '../../../services/commentsService'

export const AddComment = ({
    gameId,
    showCommentForm,
    setShowCommentForm
}) => {

    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        await commentsService.createComment({
            gameId,
            comment,
            author
        })
        .then(setShowCommentForm(false))
    }
    const onCancel = () => {
        setShowCommentForm(false);
    }
    
    return (
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
        );
    }

