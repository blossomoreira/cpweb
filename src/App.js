import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './components/Contato';
import Servicos from './components/Servicos';
import Tema from './components/Tema';
import Apresentacao from './components/Apresentacao';
import './App.css';
import 'google-fonts';


function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <h1>Serviços de TI da Bloom</h1>
        </div>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/contato">Contato</a>
          <a href="/servicos">Serviços</a>
          <a href="/tema">Tema</a>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Apresentacao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/tema" element={<Tema />} />
          </Routes>
        </div>
        <div className="footer">
          <p> RM: 99478 (Diogo Mendes Moreira)</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
