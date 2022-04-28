import {doFetch} from "../../../doFetch";

const AAVE_SYMBOLS = [
  'MAAVE',
  'MWMATIC',
  'MWETH',
  'MWBTC',
  'MUSDT',
  'MUSDC',
  'MDAI'
];

export async function getAaveData() {
  const API_URL = `https://aave-api-v2.aave.com/data/markets-data`;

  const { reserves: data } = await doFetch(API_URL);

  const totalLiquidity = data.reduce((sum, current) => {
    if (AAVE_SYMBOLS.includes(current.symbol)) {
      return sum + parseInt(current.totalLiquidityUSD);
    }
    return sum;
  }, 0);

  return totalLiquidity;
}
