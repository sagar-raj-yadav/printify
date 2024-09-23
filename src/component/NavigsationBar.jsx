import React from 'react';
import styles from './NavigationBar.module.css';
import NavigationItem from './NavigationItem';
import Button from './Button';

const navigationItems = [
  { text: 'Catalog', hasDropdown: false },
  { text: 'How it works', hasDropdown: true },
  { text: 'Pricing', hasDropdown: false },
  { text: 'Blog', hasDropdown: false },
  { text: 'Services', hasDropdown: true },
  { text: 'Use-cases', hasDropdown: true },
  { text: 'Need help?', hasDropdown: true },
];

const NavigationBar = () => (
  <nav className={styles.container}>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1b28c1d0725ae57e4d2d7af0076d976b77832022202f927a300c31636bfe710?placeholderIfAbsent=true&apiKey=b54505003cfa42f49d13ceb598b36320" alt="Company logo" className={styles.logo} />
    <div className={styles.navItems}>
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </div>
    <div className={styles.authButtons}>
      <Button variant="secondary">Log in</Button>
      <Button variant="primary">Sign up</Button>
    </div>
  </nav>
);

export default NavigationBar;