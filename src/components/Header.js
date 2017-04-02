import './Header.scss'
import React, { PropTypes } from 'react'

const TOTAL_STEPS = 3

// <Header
//   title = 'Signup'
//   step = 1
class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
  }
  state = {
    width: `${(this.props.step-1) / TOTAL_STEPS * 100}%`
  }

  render() {
    const {title} = this.props
    const {width} = this.state
    return (
      <header className='sos-header'>
        <h1>{title}</h1>
        <div className='progress' >
          <div className='meter' style={{width}} />
        </div>
      </header>
    )
  }

  componentDidMount() {
    const {step} = this.props
    const width = `${step / TOTAL_STEPS * 100}%`
    setTimeout(() => {
      this.setState({width})
    }, 500)
  }
}

export default Header
