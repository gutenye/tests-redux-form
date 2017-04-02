import './Date.scss'
import React, { PropTypes } from 'react'
import cx from 'classnames'

// <Date
class Date extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
  }

  state = {
    day: this.props.input.value.day || '',
    month: this.props.input.value.month || '',
    year: this.props.input.value.year || '',
  }

  render() {
    const {input, label, meta: {touched, error}} = this.props
    const {day, month, year} = this.state
    const err = touched && error
    return (
      <div className='row sos-date'>
        <label className={cx('label', {error: Boolean(err)})}>{label}{err}</label>
        <div className='fields'>
          <input name='day' placeholder='DD' autoComplete='off' value={day} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} />
          <input name='month' placeholder='MM' autoComplete='off' value={month} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} />
          <input name='year' placeholder='YYYY' autoComplete='off' value={year} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} />
        </div>
      </div>
    )
  }

  onChange = (e) => {
    const {input} = this.props
    const values = {...this.state, [e.target.name]: e.target.value}
    this.setState(values)
    input.onChange(values)
  }

  onBlur = () => {
    this.props.input.onBlur(this.state)
  }

  onFocus = () => {
    this.props.input.onFocus(this.state)
  }
}

export default Date
