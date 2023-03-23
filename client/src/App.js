import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import * as authService from "./services/authService"
import { AuthContext } from "./contexts/AuthContext";
import { Team } from "./components/teamInfo/Team";
import { AddNewGame } from "./components/gamesCatalogue/AddNewGame";
import { Catalogue } from "./components/gamesCatalogue/Catalogue";
import { EditGame } from "./components/gamesCatalogue/EditGame";
import { GameDetails } from "./components/gamesCatalogue/GameDetails";
import { AboutUs } from "./components/homePage/AboutUs";
import { Footer } from "./components/globalComponents/Footer";
import { ImageInfo } from "./components/homePage/ImageInfo";
import { Navigation } from "./components/globalComponents/Navigation";
import { Topbar } from "./components/homePage/Topbar";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { NotFound } from "./components/pageNotFound/NotFound";
import { AddComment } from "./components/gamesCatalogue/comments/AddComment";
import { Logout } from "./components/user/Logout";

function App() {

  const [state, setState] = useState({});
  function setStateFunc (data) {
    setState(data)
  }
  const onLogout = async () => {
    await authService.logout();
    setState({});
  }
  const contextValues = {
    setStateFunc,
    isAuthenticated: !!state.token,
    onLogout
  }

  return (
    <AuthContext.Provider value={contextValues}>
    <div className="gameOn">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
              <Topbar />
              <ImageInfo />
              <AboutUs />
            </>
          }
        />
        <Route path="*" element={ <NotFound /> } />
        <Route path="/team" element={ <Team /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/new-game" element={ <AddNewGame /> } />
        <Route path="/comments/:gameId" element={ <AddComment /> } />
        <Route path="/games/" element={<Catalogue />}/>
        <Route path="/games/:gameId" element={ <GameDetails /> } />
        <Route path="/games/:gameId/edit" element={ <EditGame /> } />
      </Routes>
      <Footer/>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
