import React, { PropTypes } from 'react'
import cx from 'classnames'

class Input extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
  }

  render() {
    const {input, label, type, meta: {touched, error}} = this.props
    const err = touched && error
    return (
      <div className='row'>
        <label className={cx('label', {error: Boolean(err)})}>{label}{err}</label>
        <input className='input' {...input} type={type} />
      </div>
    )
  }
}

export default Input
