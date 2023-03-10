import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Games Catalogue</h1>
            <Link to="/new-game" className="btn btn-primary py-md-3 px-md-5 mt-2">Add new game</Link>
    </div>
    );
}