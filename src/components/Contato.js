// Contato.js

import React, { useState } from 'react';
import axios from 'axios';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      console.error('Erro na hora de buscar o CEP:', error);
    }
  };

  return (
    <div className="contato-container">
      <h2 className="contato-titulo">Entre em Contato</h2>
      <form className="contato-formulario">
        <label className="contato-rotulo">
          Nome:
          <input type="text" className="contato-entrada" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label className="contato-rotulo">
          E-mail:
          <input type="email" className="contato-entrada" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className="contato-rotulo">
          CEP:
          <input type="text" className="contato-entrada" value={cep} onChange={(e) => setCep(e.target.value)} />
          <button type="button" className="contato-botao" onClick={buscarEndereco}>Buscar Endereço</button>
        </label>
        <br />
        <label className="contato-rotulo">
          Rua: {endereco.logradouro}
        </label>
        <br />
        <label className="contato-rotulo">
          Bairro: {endereco.bairro}
        </label>
        <br/>
        <button type="submit" className="contato-botao">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
