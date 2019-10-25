import React from 'react'
import { Formik } from 'formik';

const sendAnswer = (ans) => {
  alert(ans)
}

const AnswerForm = () => <Formik
  initialValues={{}}
  onSubmit={(values, actions) => {
    sendAnswer(values.answer)
  }}
  render={props => (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.answer}
        name="answer"
        placeholder="Digite uma respota..."
      />
      <button type="submit">Responder</button>
    </form>
  )}
/>

export default AnswerForm