import React from 'react';
import styles from "./styles.module.sass";
import arrowUp from "../../assets/arrow_drop_up_24px.svg";
import arrowDown from "../../assets/arrow_drop_down_24px.svg";

export default function Metric({title, amount, percentage, percentageIncrease}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.amount}>{amount}</div>
        {percentage &&
          <div className={`${styles.percentage} ${percentageIncrease ? styles.percIncr : styles.percDecr}`}>
            <img alt="arrow" className="arrow" src={percentageIncrease ? arrowUp : arrowDown} />
            ({percentageIncrease ? '+' : ''}{percentage}%)
          </div>
        }
    </div>
  )
}
