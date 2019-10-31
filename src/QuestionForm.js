import React from 'react'
import { Formik } from 'formik';

const QuestionForm = ({ event }) => <Formik
  initialValues={{}}
  onSubmit={values => event(values.question)}
  render={props => <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.question}
        name="question"
        placeholder="Digite uma questão/dúvida..."
      />
      <button type="submit">Responder</button>
    </form>
  }
/>

export default QuestionForm