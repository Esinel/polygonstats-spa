import {doFetch} from "../../../doFetch";
import {getPercentageDifference} from "../../../util";


// [
//   [
//     1621914000000.0,
//     "23670.04038253022253941795235292040715963"
//   ],
//   [
//     1622000400000.0,
//     "19728.243974779908597461838788898302902815"
//   ]
// ]

export async function getSushiwrapData() {
  const API_URL = 'https://api.coingecko.com/api/v3/exchanges/sushiswap/volume_chart?days=2';
  const volumeList = await doFetch(API_URL);
  const volumeInBtcToday = volumeList[1][1];
  const volumeInBtcYesterday = volumeList[0][1];
  const percentageDifference = getPercentageDifference(volumeInBtcToday, volumeInBtcYesterday);
  return {
    volumeInBtc: volumeInBtcToday,
    percentageDifference
  }
}
