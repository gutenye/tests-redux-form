import './Footer.scss'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { withRouter } from 'react-router'

// <Footer
//    submitName: 'step2'
//    prevRoute: '/step-1'
class Footer extends React.Component {
  static propTypes = {
    submitName: PropTypes.string.isRequired,
    prevRoute: PropTypes.string,
  }

  render() {
    const {prevRoute} = this.props
    return (
      <footer className='sos-footer'>
        {prevRoute && <a className='button prev' onClick={this.back}>Back</a>}
        <div className='middle'></div>
        <a className='button next' onClick={this.next}>Next</a>
      </footer>
    )
  }

  back = (e) => {
    const {history, prevRoute} = this.props
    e.preventDefault()
    history.push(prevRoute)
  }

  next = (e) => {
    const {dispatch, submitName, history} = this.props
    e.preventDefault()
    dispatch(submit(submitName))
  }
}

export { Footer }

export default connect()(Footer)
