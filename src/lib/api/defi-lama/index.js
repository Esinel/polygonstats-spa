import {doFetch} from "../../doFetch";
import {getPercentageDifference} from "../../util";

export async function getDefiLamaData() {
  const API_URL = `https://api.llama.fi/protocol/polygon`;

  const data = await doFetch(API_URL);

  const totalLiquidity = data.tvl.reduce((sum, current) => {
    return sum + current.totalLiquidityUSD;
  }, 0);

  const liquidityToday = data.tvl[data.tvl.length - 1].totalLiquidityUSD;
  const liquidityYesterday = data.tvl[data.tvl.length - 2].totalLiquidityUSD;

  const percentageDifference = getPercentageDifference(liquidityToday, liquidityYesterday);

  return {
    totalLiquidity: Math.round(totalLiquidity),
    percentageDifference
  }
}
