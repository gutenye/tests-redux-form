import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'components'
import { isRequired, isEmail, minLength, isEqual } from 'validations'

@connect(state => ({initialValues: state.userData}))
@reduxForm({
  form: 'step1'
})
class Form extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form className='section form' onSubmit={handleSubmit}>
        <Field name='email' label='Email' type='text' component={Input} validate={[isRequired(), isEmail()]} />
        <Field name='password' label='Password' type='password' component={Input} validate={[isRequired(), minLength(6)]} />
        <Field name='password_confirmation' label='Confirm Password' type='password' component={Input} validate={[isRequired(), isEqual('password')]} />
      </form>
    )
  }
}

export default Form
