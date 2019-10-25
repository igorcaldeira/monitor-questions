import React, { useState, useEffect } from 'react';
import QuestionForm from './QuestionForm'
import AnswerForm from './AnswerForm'
import './App.css';

function App() {
  const [subject, setSubject ] = useState(0)
  const [page, setPage ] = useState(-1)
  const [list, setList] = useState([])
  const [subjectsList, setSubjects] = useState([])

  useEffect(() => {
    setList([
      {
        question: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        question: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum',
        answer: 'lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        question: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        question: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum',
        answer: 'lorem ipsum lorem ipsum lorem ipsum',
      },
    ])

    setSubjects([ "História", "AED1", "Filosofia", ])
  }, []);

  const QuestionsList = () => {
    return <>
      {list.map(item => <div key={item.question} className='card'>
        <h5>Pergunta</h5>
        <p>{item.question}</p>
        <h5>Resposta</h5>
        <p>{item.answer ? item.answer : page === 1 ? <AnswerForm subject={subject} /> : 'Sem resposta até o momento.'}</p>
      </div>)}
    </>
  }

  const SubjectPage = () => {
    return <h2>
      Escolha um assunto!
      <br/>
      {subjectsList.map(s => <button key={s} onClick={() => {
        setSubject(s)
        setPage(0)
      }}>{s}</button>)}
    </h2>
  }

  const UserTypePage = () => {
    return <h2>
      Você é um monitor ou um aluno?
      <button onClick={() => { setPage(1) }}>Eu sou um monitor</button>
      <button onClick={() => { setPage(2) }}>Eu sou um aluno</button>
      <button onClick={() => { setPage(-1) }}>Voltar</button>
    </h2>
  }

  const MonitorPage = () => {
    return <h2>
      Painel monitor
      <button onClick={() => { setPage(0) }}>Voltar</button>
      <QuestionsList subject={subject} />
    </h2>
  }

  const StudentPage = () => {
    return <h2>
      Painel Aluno
      <button onClick={() => { setPage(0) }}>Voltar</button>
      <QuestionForm />
      <QuestionsList />
    </h2>
  }

  return (
    <div className="App">
      <div className="questions-area">
        {page === -1 && <SubjectPage />}
        {page === 0 && <UserTypePage />}
        {page === 1 && <MonitorPage />}
        {page === 2 && <StudentPage />}
      </div>
    </div>
  );
}

export default App;
