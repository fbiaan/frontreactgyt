import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Altaalumno from './pages/NuevoPago/Altapago';
import NuevoPago from './pages/AltaPago/NuevoPago'; 
import VerPagos from './pages/VerPagos/PagosGral';
import Resupagos from './pages/Resumenes/Resumenpagos'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/alumnos' element={<Altaalumno />}></Route>
          <Route path='/nuevopago' element={<NuevoPago />}></Route>

          <Route path='/verpagos' element={<VerPagos />}></Route>
          <Route path='/resupagos' element={<Resupagos />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
