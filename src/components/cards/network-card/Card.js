import React from 'react'
import styles from './styles.card.module.sass';
import arrowDown from '/src/assets/arrow_drop_down_24px.svg';
import arrowUp from '/src/assets/arrow_drop_up_24px.svg';
import Metric from "../../metric/Metric";
import CommingSoon from "../../comming-soon/CommingSoon";
import {openLink} from "../../../lib/util";

export default function Card(props) {
  const {logo, btn, link} = props;
  const {title, amount, percentage, percentageIncrease = true} = props;
  const {titleM2, amountM2, percentageM2, percentageM2Increase = true} = props;
  return (
    <div className={styles.container}>
      {logo && <div className={styles.logoWrapper}><img alt="logo" src={logo}/></div>}
      <div className={styles.cardContent}>
        <Metric title={title} amount={amount} percentage={percentage} percentageIncrease={percentageIncrease} />
        {titleM2 && amountM2 &&
        (
          <div>
            <br/>
            <Metric title={titleM2} amount={amountM2} percentage={percentageM2} percentageIncrease={percentageM2Increase} />
            <br/>
          </div>
        )
        }
      </div>
      {btn && link && <button onClick={() => openLink(link)}>Details</button>}
    </div>
  )
}
