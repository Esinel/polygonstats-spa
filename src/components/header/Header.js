import React from 'react';
import styles from './styles.header.module.sass';
import Logo from "../logo/Logo";

export default function Header() {
  return (
    <nav className={styles.navigation} id="main-nav">
      <Logo />

      <div className={styles.navItems}>
        <a href="#network-stats" className="underline-link-rail">Network Stats</a>
        <a href="#economic-stats" className="underline-link-rail">Economic Stats</a>
        <a href="#daaps-on-polygon" className="underline-link-rail">Daaps on Polygon</a>
      </div>
    </nav>
  )
}
