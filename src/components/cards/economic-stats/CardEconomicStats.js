import React from 'react';
import styles from './style.module.sass';
import logo_view_base from '/src/assets/coin-logos/view-base.svg';
import Metric from "../../metric/Metric";
import { getMaticValue } from "../../../lib/api/matic";
import {getViewbaseData} from "../../../lib/api/viewbase";
import Spinner from "../../spinner/Spinner";
import {openLink} from "../../../lib/util";

export default function CardEconomicStats() {

  const isInitialMount = React.useRef(true);

  const [isLoading, setIsLoading] = React.useState(true);
  const [daysForStats, setDays] = React.useState(1);
  const [maticValueInUsd, setMaticValueInUsd] = React.useState(0);
  const [maticAmount, setMaticAmount] = React.useState('0');
  const [maticAmountInUsd, setMaticAmountInUsd] = React.useState('0');

  // RUN ON COMPONENT MOUNT
  React.useEffect(() => {
    (async () => {
      await fetchInitialData();
      setIsLoading(false);
    })();
  },[]);

  // RUN ONLY ON DEPENDENCY CHANGE
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setIsLoading(true);
      (async () => {
        await fetchViewbaseData();
        setIsLoading(false);
      })();
    }
  }, [daysForStats]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}><img alt="logo" src={logo_view_base}/></div>
        <div className={styles.navWrapper}>
          <button className={daysForStats === 1 ? styles.btnActive : null} onClick={() => setDays(1)}>1 Day</button>
          <button className={daysForStats === 7 ? styles.btnActive : null} onClick={() => setDays(7)}>7 Days</button>
          <button className={daysForStats === 30 ? styles.btnActive : null} onClick={() => setDays(30)}>30 Days</button>
        </div>
      </div>


      <div className={styles.metricsContainer}>
        <Metric
          title={'Total value locked (USD)'}
          amount={isLoading ? <Spinner/> : `$${maticAmountInUsd}`}
        />
        <Metric
          title={'Total value locked (MATIC)'}
          amount={isLoading ? <Spinner /> : `${maticAmount} MATIC`}
        />
      </div>

      <div><button onClick={() => openLink('https://www.viewbase.com/coin/matic-network')}>Details</button></div>
    </div>
  )


  async function fetchInitialData() {
    const maticValueInUsd = await getMaticValue();
    const maticAmountResponse = await getViewbaseData({days: daysForStats});
    setMaticValueInUsd(maticValueInUsd);
    setMaticAmount(maticAmountResponse.toLocaleString());
    setMaticAmountInUsd((Math.round(maticValueInUsd * maticAmountResponse)).toLocaleString());
  }

  async function fetchCoinValueInUsd() {
    const maticValueInUsd = await getMaticValue();
    setMaticValueInUsd(maticValueInUsd);
  }

  async function fetchViewbaseData() {
    const maticAmountResponse = await getViewbaseData({days: daysForStats});
    setMaticAmount(maticAmountResponse.toLocaleString());
    setMaticAmountInUsd((Math.round(maticValueInUsd * maticAmountResponse)).toLocaleString());
  }
}
