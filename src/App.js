import React from 'react';
import {hot} from 'react-hot-loader';
import "regenerator-runtime/runtime.js";
import Header from "./components/header/Header";
import styles from './styles.module.scss';

// assets
import neon_background  from './assets/neon.svg';
import graph_chart from './assets/chart.svg';
// coin logos
import logo_defi_pulse from './assets/coin-logos/defi-pulse.png';
import logo_defi_lama from './assets/coin-logos/defi-lama.svg';
// daaps logos
import logo_aave from './assets/coin-logos/aave.png';
import logo_sushi from './assets/coin-logos/sushi-swap.svg';
import logo_curve from './assets/coin-logos/curve.png';
import logo_quickswap from './assets/coin-logos/quickswap.svg';
import CommingSoon from "./components/comming-soon/CommingSoon";
import Card from "./components/cards/network-card/Card";
import CardEconomicStats from "./components/cards/economic-stats/CardEconomicStats";
import { getMaticData } from "./lib/api/matic";
import Spinner from "./components/spinner/Spinner";
import {getDefiPulseData} from "./lib/api/defi-pulse";
import {getDefiLamaData} from "./lib/api/defi-lama";
import {getAaveData} from "./lib/api/daaps/aave";
import {getCurveData} from "./lib/api/daaps/curve";
import {getQuickswapData} from "./lib/api/daaps/quickswap";
import {getSushiwrapData} from "./lib/api/daaps/sushi-swap";
import {getBitcoinValueInUsd} from "./lib/api/bitcoin";
import Footer from "./components/footer/Footer";

function App() {

  //
  // STATES SETUP
  //

  // network stats
  const [maticData, setMaticData] = React.useState({
    totalValidators: 0,
    validatorsTotalStake: 0,
    isLoading: true
  });

  // Economic stats
  const [defiPulseData, setDefiPulseData] = React.useState({
    totalValueLocked: 0,
    isLoading: true
  });

  const [defiLamaData, setDefiLamaData] = React.useState({
    totalValueLocked: 0,
    percentageDifference: 0,
    isLoading: true
  });

  // Dapps
  const [aaveDappData, setAaveDappData] = React.useState({
    liquidity: 0,
    isLoading: true
  });

  const [curveDappData, setCurveDappData] = React.useState({
    deposit: 0,
    dailyVolume: 0,
    isLoading: true
  });

  const [sushiDappData, setSushiDappData] = React.useState({
    volume: 0,
    percentageDifference: 0,
    liquidity: 0,
    isLoading: true
  });

  const [quickswapDappData, setQuickswapData] = React.useState({
    volume: 0,
    percentageDifference: 0,
    liquidity: 0,
    isLoading: true
  });

  const [bitcoinValueInUsd, setBitcoinValueInUsd] = React.useState({
    value: 0
  });


  React.useEffect(() => {
    fetchInitialData();
  }, []);


  return(
    <div>
      <div className={styles.appContainer}>
        {/*<button style={{position: 'fixed', bottom: '0', zIndex: '999'}} onClick={() => fetchInitialData()}>Alo</button>*/}
        <img src={neon_background} className={styles.neonBackground} alt="background"/>

        <div className={styles.app}>
          <Header />
          <h1 className="title" id="network-stats">Network Stats</h1>
          <div className={styles.networkStatsGrid}>
            <div style={{position: 'relative'}}><img src={graph_chart}/> <CommingSoon/> </div>
            <Card title={'Tx/day'} amount={'3,268,042'} percentage={12} percentageIncrease={true}/>
            <Card title={'Total transactions'} amount={'58,529,518'} percentage={5} percentageIncrease={true}/>
            <Card title={'Wallet addresses'} amount={'683,992'} percentage={8} percentageIncrease={true}/>
            <Card title={'Total blocks'} amount={'14,439,758'} percentage={100} percentageIncrease={true}/>
            <Card
              title={'Total Validators'}
              amount={maticData.isLoading ? <Spinner /> : maticData.totalValidators}
            />
            <Card
              title={'Validators total stake'}
              amount={maticData.isLoading ? <Spinner /> : maticData.validatorsTotalStake}
            />
          </div>

          <h1 className="title" id="economic-stats">Economic Stats</h1>
          <div className={styles.economicStatsSection}>
            <CardEconomicStats />
            <Card
              logo={logo_defi_pulse}
              btn={true}
              link={'https://defipulse.com/'}
              title={'Total Value Locked'}
              amount={defiPulseData.isLoading ? <Spinner/> : `$${defiPulseData.totalValueLocked}`}
            />
            <Card
              logo={logo_defi_lama}
              btn={true}
              link={'https://defillama.com/home'}
              title={'Total Value Locked'}
              amount={defiLamaData.isLoading ? <Spinner /> : `$${defiLamaData.totalValueLocked}`}
              percentage={defiLamaData.percentageDifference}
              percentageIncrease={defiLamaData.percentageDifference > 0}
            />
          </div>

          <h1 className="title" id="daaps-on-polygon">Dapps On Polygon</h1>
          <div className={styles.dappsSection}>
            <Card
              logo={logo_aave}
              title={'Market size'}
              amount={aaveDappData.isLoading ? <Spinner /> : aaveDappData.liquidity}
              btn={true}
              link={'https://aave.com/'}
            />
            <Card
              logo={logo_sushi}
              title={'Volume'}
              amount={sushiDappData.isLoading ? <Spinner /> : `$${sushiDappData.volume}`}
              percentage={sushiDappData.percentageDifference}
              percentageIncrease={sushiDappData.percentageDifference > 0}
              titleM2={'Liquidity'}
              amountM2={'coming soon...'}
              btn={true}
              link={'https://www.coingecko.com/en/coins/sushi'}
            />
            <Card
              logo={logo_curve}
              title={'Deposit'}
              amount={curveDappData.isLoading ? <Spinner /> : curveDappData.deposit}
              titleM2={'Daily Volume'}
              amountM2={curveDappData.isLoading ? <Spinner /> : curveDappData.dailyVolume}
              btn={true}
              link={'https://curve.fi/3pool'}
            />
            <Card
              logo={logo_quickswap}
              title={'Volume'}
              amount={quickswapDappData.isLoading ? <Spinner /> : `$${quickswapDappData.volume}`}
              percentage={quickswapDappData.percentageDifference}
              percentageIncrease={quickswapDappData.percentageDifference > 0}
              titleM2={'Liquidity'}
              amountM2={'coming soon...'}
              btn={true}
              link={'https://www.coingecko.com/en/coins/quickswap'}
            />
          </div>

        </div>
      </div>

      <footer>
        <div className={styles.footerInner}>
          <Footer />
          <div>© 2021 Polygonstats. All right reserved.</div>
        </div>
      </footer>
    </div>
  );

  function fetchInitialData() {
    fetchMaticData()
      .catch(e => console.error('error loading matic data'));
    fetchDefiPulseData()
      .catch(e => {
        console.error(e);
        setDefiPulseData({
          totalValueLocked: 'unavailable',
          isLoading: false
        })
      });
    fetchDefiLamaData()
      .catch(e => console.error('error loading defi lama data'));
    fetchAaveDappData()
      .catch(e => console.error('error loading aave dapp data'));
    fetchCurveDappData()
      .catch(e => console.error('error loading curve dapp data'));
    fetchBitcoinValueInUsd().then((bitcoinValue) => {
      setBitcoinValueInUsd(bitcoinValue);
      fetchSushiDappData(bitcoinValue)
        .catch(e => console.error('error loading sushi dapp data'));
      fetchQuickswapDappData(bitcoinValue)
        .catch(e => console.error('error loading quickswap dapp data'));
    });
  }

  // NETWORK STATS
  async function fetchMaticData() {
    const maticData = await getMaticData();
    setMaticData((oldState) => ({
      ...oldState,
      ...maticData,
      isLoading: false
    }));
  }

  // DEFI PULSE
  async function fetchDefiPulseData() {
    const defiPulseData = await getDefiPulseData();

    setDefiPulseData((oldState) => ({
      ...oldState,
      totalValueLocked: parseInt(defiPulseData).toLocaleString(),
      isLoading: false
    }));
  }

  // DEFI LAMA
  async function fetchDefiLamaData() {
    setDefiLamaData({
      isLoading: true
    })
    const { totalLiquidity, percentageDifference } = await getDefiLamaData();
    setDefiLamaData({
      totalValueLocked: parseInt(totalLiquidity).toLocaleString(),
      percentageDifference,
      isLoading: false
    });
  }

  //--
  // -- DAAPS
  //--

  // AAVE
  async function fetchAaveDappData() {
    const liquidity = await getAaveData();
    setAaveDappData({
      liquidity: parseInt(liquidity).toLocaleString(),
      isLoading: false
    });
  }

  // Curve
  async function fetchCurveDappData() {
    const { deposit, dailyVolume } = await getCurveData();
    setCurveDappData({
      deposit: parseInt(deposit).toLocaleString(),
      dailyVolume: parseInt(dailyVolume).toLocaleString(),
      isLoading: false
    });
  }

  // Sushi
  async function fetchSushiDappData(btc) {
    const { volumeInBtc, percentageDifference } = await getSushiwrapData();
    setSushiDappData(_s => ({
      ..._s,
      volume: parseInt((volumeInBtc * btc).toFixed(2)).toLocaleString(),
      percentageDifference,
      isLoading: false
    }))
  }

  // Quickswap
  async function fetchQuickswapDappData(btc) {
    const { volumeInBtc, percentageDifference } = await getQuickswapData();
    setQuickswapData(_s => ({
      ..._s,
      volume: parseInt((volumeInBtc * btc).toFixed(2)).toLocaleString(),
      percentageDifference,
      isLoading: false
    }));
  }

  // Bitcoin
  async function fetchBitcoinValueInUsd() {
    const bitcoinValue = await getBitcoinValueInUsd();
    return bitcoinValue;
  }
}

export default hot(module)(App);
