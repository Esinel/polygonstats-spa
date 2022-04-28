import {doFetch} from "../../doFetch";

export async function getDefiPulseData() {
  const API_URL = `https://data-api.defipulse.com/api/v1/defipulse/api/MarketData?api-key=728e7d1cf4da0a524bbb454dfe68702aeb8bcdecf0dbbade6482123b31d5`;

  const data = await doFetch(API_URL);

  return data['All']['value']['total']['USD']['value'];
}
