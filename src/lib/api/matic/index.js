import {doFetch} from "../../doFetch";
import {scientificNotationToNumber} from "../../util";


export async function getMaticData() {
  const API = 'https://sentinel.matic.network/api/v2/validators?limit=20&offset=0&sortBy=uptimePercent&inAuction=false&moveStakeEnabled=false';
  const data = await doFetch(API);

  const totalValidators = data.summary.total;
  let validatorsTotalStake = data.result.reduce((sum, current) => {
    return sum + current.totalStaked
  }, 0);

  // convert huge num to b (billion)
  validatorsTotalStake = validatorsTotalStake / 1000000000;

  return {totalValidators, validatorsTotalStake: `${scientificNotationToNumber(validatorsTotalStake)} billion`};
}

export async function getMaticValue() {
  const API = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=matic-network';
  const data = await doFetch(API);


  const maticValueInUSD = data['matic-network']['usd'];
  return maticValueInUSD;
}
