import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthenticatedRouting } from "./components/authRoutes/AuthenticatedRouting";

import { Team } from "./components/teamInfo/Team";
import { AddNewGame } from "./components/gamesCatalogue/newGame/AddNewGame";
import { Catalogue } from "./components/gamesCatalogue/Catalogue";
import { EditGame } from "./components/gamesCatalogue/editGame/EditGame";
import { GameDetails } from "./components/gamesCatalogue/gameDetails/GameDetails";
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
import { FormValidatorProvider } from "./contexts/FormValidatorContext";
import { MyGames } from "./components/gamesCatalogue/myGames/MyGames";

function App() {

  return (
    <AuthProvider>
        <FormValidatorProvider>
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
        <Route path="/games/" element={<Catalogue />}/>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route element={<AuthenticatedRouting/>}>
          <Route path="/new-game" element={ <AddNewGame /> } />
          <Route path="/my-games" element={ <MyGames /> } />
          <Route path="/comments/:gameId" element={ <AddComment /> } />
          <Route path="/games/:gameId" element={ <GameDetails /> } />
          <Route path="/games/:gameId/edit" element={ <EditGame /> } />
        </Route>
      </Routes>
      <Footer/>
    </div>
        </FormValidatorProvider>
    </AuthProvider>
  );
}

export default App;
