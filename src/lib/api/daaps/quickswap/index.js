import { doFetch } from '/src/lib/doFetch';
import {getPercentageDifference} from "../../../util";

export async function getQuickswapData() {
  const API_URL = 'https://api.coingecko.com/api/v3/exchanges/quickswap/volume_chart?days=2';
  const volumeList = await doFetch(API_URL);
  const volumeInBtcToday =  volumeList[1][1];
  const volumeInBtcYesterday =  volumeList[0][1];
  const percentageDifference = getPercentageDifference(volumeInBtcToday, volumeInBtcYesterday);
  return {
    volumeInBtc: volumeInBtcToday,
    percentageDifference
  }
}
