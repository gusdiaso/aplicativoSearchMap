// Exemplo: MeuContexto.js

import { createContext, useState, useContext } from 'react';

// Criação do contexto
const MeuContexto = createContext();

// Provedor do contexto
const MeuContextoProvider = ({ children }) => {
  const [historico, setHistorico] = useState([]);

  return (
    <MeuContexto.Provider value={{ historico, setHistorico }}>
      {children}
    </MeuContexto.Provider>
  );
};

// Exportar o contexto e o provedor
export { MeuContexto, MeuContextoProvider };
