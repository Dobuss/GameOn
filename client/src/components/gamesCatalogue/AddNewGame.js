export const AddNewGame = () => {
    return (
        <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4">Add a <span className="text-primary">New Game</span> to our DATABASE</h1>
                </div>
                <p className="mb-5" style={{fontSize: 30}}>Thank you for helping us grow. <i className="far fa-smile-beam"></i></p>
            </div>
            <div className="col-lg-8">
                <div className="bg-light text-center p-5">
                    <form>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <label className="newGameLbl" htmlFor="name">Game Name</label>
                                <input type="text" id="name" className="form-control border-0" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="category">Game Category</label>
                            <select id="category" className="form-control border-0 select" style={{height: 55}}>
                                    <option value="">--Please choose category--</option>
                                    <option value="action">Action-adventure</option>
                                    <option value="moba">Multiplayer online battle arena (MOBA)</option>
                                    <option value="platform">Platform</option>
                                    <option value="rts">Real-time strategy (RTS)</option>
                                    <option value="rpg">Role-playing (RPG, ARPG, and More)</option>
                                    <option value="sandbox">Sandbox</option>
                                    <option value="shooters">Shooter (FPS and TPS)</option>
                                    <option value="sport">Simulation and sports</option>
                                    <option value="horror">Survival and horror</option>
                                    <option value="puzzlers">Puzzles and party games</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="date">Release Date</label>
                                <input id="date" type="date" className="form-control border-0" value="2000-01-01" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="imageUrl">Image URL</label>
                                <input type="text" id="imageUrl" className="form-control border-0" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            <label className="newGameLbl" htmlFor="platform">Select a platform</label>
                                <select id="platform" className="form-control border-0 select" style={{height: 55}}>
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
                                <select id="mode" className="form-control border-0 select" style={{height: 55}}>
                                    <option value="">--Please choose mode--</option>
                                    <option value="single">Singleplayer</option>
                                    <option value="multi">Multiplayer</option>
                                </select>
                            </div>
                            <div className="col-12">
                            <label className="newGameLbl" htmlFor="description">Game Description</label>
                                <textarea className="form-control border-0" rows="5"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Game</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}