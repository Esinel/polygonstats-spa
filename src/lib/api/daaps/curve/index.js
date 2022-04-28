import {doFetch} from "../../../doFetch";

export async function getCurveData() {
  const API_URL_DEPOSIT = `https://api.curve.fi/api/getTVLPolygon`;
  const API_URL_DAILY_VOLUME = `https://stats.curve.fi/raw-stats-polygon/apys.json`;

  const deposit = await doFetch(API_URL_DEPOSIT);
  const dailyVolume = await doFetch(API_URL_DAILY_VOLUME);

  return {
    deposit: deposit.data.tvl.toFixed(2),
    dailyVolume: dailyVolume.volume.aave.toFixed(2)
  }
}
