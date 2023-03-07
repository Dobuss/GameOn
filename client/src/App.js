import './App.css';
import { Contact } from './components/Contact';
import { Catalogue } from './components/gamesCatalogue/Catalogue';
import { Header } from './components/gamesCatalogue/Header';
import { AboutUs } from './components/homePage/AboutUs';
import { Footer } from './components/homePage/Footer';
import { ImageInfo } from './components/homePage/ImageInfo';
import { Navigation } from './components/homePage/Navigation';
import { Topbar } from './components/homePage/Topbar';
function App() {
  return (
    <>
    <Topbar />
    <Navigation />
    <ImageInfo />
    <AboutUs />

{/*Contact is to be moved*/}
    <Contact /> 

    <Footer />

    Catalogue
    This will also be moved to another location
    <Header />
    <Catalogue />
    </>
  );
}

export default App;
