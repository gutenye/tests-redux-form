import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { Header, Footer,  } from 'components'
import * as actions from 'states/userData'

@connect(null, actions)
class Step2Page extends React.Component {
  render() {
    return (
      <div className='sos-page'>
        <Header title='Signup' step={2} />
        <Form onSubmit={this.onSubmit} />
        <Footer submitName='step2' prevRoute='/' history={this.props.history} />
      </div>
    )
  }

  onSubmit = (values) => {
    const {history, submitUserData} = this.props
    submitUserData(values)
    history.push('/step-3')
  }
}

export default Step2Page
