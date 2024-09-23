import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary' }) => (
  <button className={`${styles.button} ${styles[variant]}`}>
    {children}
  </button>
);

export default Button;