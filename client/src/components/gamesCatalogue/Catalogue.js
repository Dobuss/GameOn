import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as gamesService from '../../services/gamesService';
import { Game } from './Game'

export const Catalogue = () => {

    const [games, setGames] = useState(null);

    useEffect(() => {
        gamesService
        .getGames()
        .then(games => {
            setGames(games);
        })
        .catch((err) => {
            throw err;
        });
    }, []);

    return (
        <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <h1 className="display-5 text-uppercase mb-4">Browse <span className="text-primary">Games</span></h1>
        </div>
        <div className="row g-5">

            {games?.map(g => <Game key={g._id} game={g}/>)}

            <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center m-0">
                    <li className="page-item disabled">
                      <Link className="page-link rounded-0" to="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </Link>
                    </li>
                    <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                    <li className="page-item">
                      <Link className="page-link rounded-0" to="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
    );
}