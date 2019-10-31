import React, { useState, useEffect } from 'react'
import QuestionForm from './QuestionForm'
import AnswerForm from './AnswerForm'
import './App.css'

var myHeaders = new Headers()
var backHost = 'http://localhost:3000/api/'
var basicHeader = {
  method: 'POST',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}

function App() {
  const [subject, setSubject ] = useState('aed1')
  const [page, setPage ] = useState(-1)
  const [list, setList] = useState([])
  const [subjectsList, setSubjects] = useState([])

  const sendQuestion = title => {
    const body = JSON.stringify({ name: 'Aluno', title })
    fetch(`${backHost}${subject}/question`, { ...basicHeader, body })
    .then(response => console.log('sucesso ', response))
    setList([...list, { question: title }])
  }

  const sendAnswer = (title, text) => {
    const body = JSON.stringify({ name: 'Monitor', title, text })
    const updateList = [...list]
    let updateIndex = -1;
    updateList.forEach((item, key) => {
      if(item.question === title)
        updateIndex = key
    })
    updateList[updateIndex] = { ...updateList[updateIndex], answer: text }
    fetch(`${backHost}${subject}/answer`, { ...basicHeader, body })
    .then(response => console.log('sucesso ', response))
    setList(updateList)
  }

  useEffect(() => {
    setList([])
    setSubjects([ 'historia', 'aed1', 'filosofia', ])
  }, [])

  const QuestionsList = () => {
    return <>
      {list.map(item => <div key={item.question} className='card'>
        <h5>Pergunta</h5>
        <p>{item.question}</p>
        <h5>Resposta</h5>
        <p>{item.answer ? item.answer : page === 1 ? (
          <AnswerForm question={item.question} event={sendAnswer} />
        ) : 'Sem resposta até o momento.'}</p>
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
      <QuestionsList />
    </h2>
  }

  const StudentPage = () => {
    return <h2>
      Painel Aluno
      <button onClick={() => { setPage(0) }}>Voltar</button>
      <QuestionForm event={sendQuestion} />
      <QuestionsList />
    </h2>
  }

  return <div className='App'>
    <div className='questions-area'>
      {page === -1 && <SubjectPage />}
      {page === 0 && <UserTypePage />}
      {page === 1 && <MonitorPage />}
      {page === 2 && <StudentPage />}
    </div>
  </div>
}

export default App
