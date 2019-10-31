import React from 'react'
import { Formik } from 'formik';

const AnswerForm = ({ question, event }) => <Formik
  initialValues={{}}
  onSubmit={values => event(question, values.answer)}
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