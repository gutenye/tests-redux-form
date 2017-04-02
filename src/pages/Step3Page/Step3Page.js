import './Step3Page.scss'
import React from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { Header } from 'components'
import IconCheck from 'assets/check.svg'

@connect(state => ({userData: state.userData}))
class Step3Page extends React.Component {
  render() {
    return (
      <div className='sos-page sos-step3-page'>
        <Header title='Thank you!' step={3} />
        <div className='section'>
          <div className='inner'>
            <IconCheck className='icon-check' />
            <div className='line'>
              <div className='button' onClick={this.gotoDashboard}>Go to Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  gotoDashboard = () => {
    const {form, userData} = this.props
    // fix data_or_birth
    if (userData.date_of_birth.year) {
      const {year, month, day} = userData.date_of_birth
      userData.date_of_birth =  new Date(year, month, day)
    }
    // delete password_confirmation
    delete userData.password_confirmation
    console.log(JSON.stringify({user_data: userData}, null, 2))
  }
}

export default Step3Page
