import React from 'react';
import styles from "./styles.module.sass";
import logo from "../../assets/logo-only.svg";
import logoText from "../../assets/logo-text.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img alt="logo" src={logo}/>
      <img alt="logo-text" src={logoText} />
    </div>
  )
}
