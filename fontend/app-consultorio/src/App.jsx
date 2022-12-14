import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/crear-cuenta' exact element={<CrearCuenta />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
