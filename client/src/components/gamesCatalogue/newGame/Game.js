import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';

export const Game = ({game}) => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src={game.imageUrl} alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: {game.category} </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>{game.date}</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">{game.name}</h4>
                        {isAuthenticated && 
                        <Link className="text-uppercase fw-bold" to={`/games/${game._id}`}>See more <i className="bi bi-arrow-right"></i></Link>
                        }
                    </div>
                </div>
            </div>
    );
}