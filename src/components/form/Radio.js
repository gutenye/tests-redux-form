import './Radio.scss'
import React, { PropTypes } from 'react'
import cx from 'classnames'

class Radio extends React.Component {
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
      <div className='row sos-radio'>
        <div className={cx('label', {error: Boolean(err)})}>{label}{err}</div>
        <div className='options'>
          {options.map(option =>
          <label key={option} className={cx('option', {active: input.value === option})}><input {...input} type='radio' value={option} checked={input.value === option} />{option}</label>
          )}
        </div>
      </div>
    )
  }
}

export default Radio
