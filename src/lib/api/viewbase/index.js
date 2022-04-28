import {doFetch} from "../../doFetch";

export async function getViewbaseData({days = 1}) {
  const API = `https://www.viewbase.com/coin_api/txn?coin_id=49&interval=${days}d`;

  const data = await doFetch(API, true);

  const total = data.reduce((sum, current) => {
    return sum + current.value
  }, 0);

  return Math.round(total);
}
