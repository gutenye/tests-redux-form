import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { Header, Footer } from 'components'
import * as actions from 'states/userData'

@connect(null, actions)
class Step1Page extends React.Component {
  render() {
    return (
      <div className='sos-page'>
        <Header title='Signup' step={1} />
        <Form onSubmit={this.onSubmit} />
        <Footer submitName='step1' history={this.props.history} />
      </div>
    )
  }

  onSubmit = (values) => {
    const {history, submitUserData} = this.props
    submitUserData(values)
    history.push('/step-2')
  }
}

export default Step1Page
