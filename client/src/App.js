import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contact";
import { AddNewGame } from "./components/gamesCatalogue/AddNewGame";
import { Catalogue } from "./components/gamesCatalogue/Catalogue";
import { Header } from "./components/gamesCatalogue/Header";
import { AboutUs } from "./components/homePage/AboutUs";
import { Footer } from "./components/homePage/Footer";
import { ImageInfo } from "./components/homePage/ImageInfo";
import { Navigation } from "./components/homePage/Navigation";
import { Topbar } from "./components/homePage/Topbar";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";

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
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/new-game" element={ <AddNewGame /> } />
        <Route path="/games/" element={
          <>
              <Header />
              <Catalogue />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
