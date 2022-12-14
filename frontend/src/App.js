import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav/>
          <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='nosotros' element={<NosotrosPage />} />
        <Route path='contacto' element={<ContactoPage />} />
        <Route path='servicios' element={<ServiciosPage />} />
        <Route path='novedades' element={<NovedadesPage />} />
          </Routes>
      
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
