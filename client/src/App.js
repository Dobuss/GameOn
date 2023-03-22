import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Team } from "./components/teamInfo/Team";
import { AddNewGame } from "./components/gamesCatalogue/AddNewGame";
import { Catalogue } from "./components/gamesCatalogue/Catalogue";
import { EditGame } from "./components/gamesCatalogue/EditGame";
import { GameDetails } from "./components/gamesCatalogue/GameDetails";
import { Header } from "./components/gamesCatalogue/Header";
import { AboutUs } from "./components/homePage/AboutUs";
import { Footer } from "./components/globalComponents/Footer";
import { ImageInfo } from "./components/homePage/ImageInfo";
import { Navigation } from "./components/globalComponents/Navigation";
import { Topbar } from "./components/homePage/Topbar";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { NotFound } from "./components/pageNotFound/NotFound";
import { AddComment } from "./components/gamesCatalogue/comments/AddComment";

function App() {

  return (
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
        <Route path="/register" element={ <Register /> } />
        <Route path="/new-game" element={ <AddNewGame /> } />
        <Route path="/comments/:gameId" element={ <AddComment /> } />
        <Route path="/games/" element={
          <>
              <Header />
              <Catalogue />
            </>
          }
        />
        <Route path="/games/:gameId" element={ <GameDetails /> } />
        <Route path="/games/:gameId/edit" element={ <EditGame /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
