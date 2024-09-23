import React from 'react';
import styles from './NavigationBar.module.css';

const NavigationItem = ({ text, hasDropdown }) => (
  <div className={styles.navItem}>
    <span>{text}</span>
    {hasDropdown && <div className={styles.dropdownIndicator} />}
  </div>
);

export default NavigationItem;