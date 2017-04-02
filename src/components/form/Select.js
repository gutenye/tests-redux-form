import './Select.scss'
import React, { PropTypes } from 'react'
import cx from 'classnames'

// <Select
//   label = 'Hello'
//   options = ['a', 'b']
class Select extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  }

  render() {
    const {input, label, options, meta: {touched, error}} = this.props
    const err = touched && error
    return (
      <div className='row sos-select'>
        <label className={cx('label', {error: Boolean(err)})}>{label}{err}</label>
        <select {...input}>
          <option></option>
          {options.map(option =>
          <option key={option} value={option}>{option}</option>
          )}
        </select>
      </div>
    )
  }
}

export default Select
