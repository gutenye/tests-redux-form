import React from 'react'
import cx from 'classnames'
import { Field, reduxForm } from 'redux-form'
import { Select, Radio, Date } from 'components'
import { isRequired, isDate } from 'validations'

@reduxForm({
  form: 'step2'
})
class Form extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form className='section form' onSubmit={handleSubmit}>
        <Field name='date_of_birth' label='Date of birth' defaultValue={{day: '', month: '', year: ''}} component={Date} validate={[isDate()]} />
        <Field name='gender' label='Gender' component={Radio} options={['Male', 'Female', 'Unspecified']} validate={[isRequired()]}  />
        <Field name='how_hear_about_us' label='Where did you hear about us?' component={Select} options={['Web', 'Friends']} />
      </form>
    )
  }
}

export default Form
