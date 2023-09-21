import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import FavPer from './pages/FavPer/FavPer'
import FavCities from './pages/FavCities/FavCities'
import FavTour from './pages/FavTour/FavTour'
import ContactInfo from './pages/ContactInfo/ContactInfo'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
   <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favper" element={<FavPer/>} />
        <Route path="/favcit" element={<FavCities />} />
        <Route path="/favtour" element={<FavTour />} />
        <Route path="/contact" element={<ContactInfo />} />  
      </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
