import React from 'react'
import PropTypes from 'prop-types'
import styles from './Key.module.css';

const Key = ({text, dimensions}) => {
  <div>
    {text}
  </div>
}

Todo.propTypes = {
  text: PropTypes.func.isRequired,
  dimensions: PropTypes.func.isRequired
}

export default Key
