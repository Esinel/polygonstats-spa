import {doFetch} from "../../doFetch";

export async function getBitcoinValueInUsd() {
  const API_URL = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin`;
  const data = await doFetch(API_URL);
  return data.bitcoin.usd;
}
