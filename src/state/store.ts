import { BitflyerTicker } from '../app/model/bitflyer-ticker';
import { CoincheckTicker } from '../app/model/coincheck-ticker';

export interface IAppState {
  bitflyerTicker: BitflyerTicker;
  coincheckTicker: CoincheckTicker;
}

export const INITIAL_STATE: IAppState = {
  bitflyerTicker: null,
  coincheckTicker: null,
};
