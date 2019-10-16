import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage ] = useState(0)

  const TipoUsuario = () => {
    return <h2>
      Você é um monitor ou um aluno?
      <button onClick={() => { setPage(1) }}>Eu sou um monitor</button>
      <button onClick={() => { setPage(2) }}>Eu sou um aluno</button>
    </h2>
  }

  const TelaMonitor = () => {
    return <h2>
      Painel monitor
      <button onClick={() => { setPage(0) }}>Voltar</button>
    </h2>
  }

  const TelaAluno = () => {
    return <h2>
      Painel Aluno
      <button onClick={() => { setPage(0) }}>Voltar</button>
    </h2>
  }

  return (
    <div className="App">
      <div className="questions-area">
        {page === 0 && <TipoUsuario />}
        {page === 1 && <TelaMonitor />}
        {page === 2 && <TelaAluno />}
      </div>
    </div>
  );
}

export default App;
